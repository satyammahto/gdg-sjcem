import React, { useState } from 'react';
import './JoinTeam.css';

const JoinTeam = () => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        bio: '',
        linkedin: '',
        github: '',
        instagram: '',
        twitter: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);

    // IMGBB API Key
    const IMGBB_API_KEY = '3bc6dafa7ecd7c01a118fad187d32ca5';
    // SheetDB URL
    const SHEETDB_URL = 'https://sheetdb.io/api/v1/kdq3tgljm208b';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImageToImgBB = async () => {
        if (!imageFile) return null;

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            setUploadingImage(true);
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            setUploadingImage(false);
            if (data.success) {
                return data.data.url;
            } else {
                throw new Error('Image upload failed');
            }
        } catch (error) {
            setUploadingImage(false);
            console.error('Error uploading image:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // 1. Upload Image
            let imageUrl = '';
            if (imageFile) {
                imageUrl = await uploadImageToImgBB();
                if (!imageUrl) {
                    throw new Error('Failed to upload image. Please try again.');
                }
            }

            // 2. Prepare Data for SheetDB
            const submissionData = {
                id: Date.now(), // Simple ID
                timestamp: new Date().toISOString(),
                ...formData,
                image: imageUrl
            };

            // 3. Send to SheetDB
            const sheetResponse = await fetch(SHEETDB_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: submissionData })
            });

            if (!sheetResponse.ok) throw new Error('Failed to save profile.');

            setStatus({ type: 'success', message: 'Profile submitted successfully! Welcome to the team! 🎉' });

            // Reset form
            setFormData({
                name: '',
                role: '',
                bio: '',
                linkedin: '',
                github: '',
                instagram: '',
                twitter: ''
            });
            setImageFile(null);
            setImagePreview(null);

        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'Something went wrong.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="join-team-section">
            <div className="join-container" data-aos="fade-up">
                <h1 className="join-title">Join the Squad</h1>
                <p className="join-subtitle">Fill in your details to get featured on our Team page.</p>

                <form className="join-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. Dhiraj Chaudhari"
                        />
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <input
                            type="text"
                            name="role"
                            className="form-control"
                            value={formData.role}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. Technical Head"
                        />
                    </div>

                    <div className="form-group">
                        <label>Profile Photo</label>
                        <div className="file-input-wrapper">
                            <input
                                type="file"
                                id="file-upload"
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="file-upload" className="file-input-label">
                                <span style={{ fontSize: '1.5rem' }}>📷</span>
                                {imageFile ? imageFile.name : 'Choose Image (Max 5MB)'}
                            </label>
                            {imagePreview && (
                                <img src={imagePreview} alt="Preview" className="preview-image" />
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Short Bio (Optional)</label>
                        <textarea
                            name="bio"
                            className="form-control"
                            rows="3"
                            value={formData.bio}
                            onChange={handleInputChange}
                            placeholder="Tell us a bit about yourself..."
                        ></textarea>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label>LinkedIn URL</label>
                            <input
                                type="url"
                                name="linkedin"
                                className="form-control"
                                value={formData.linkedin}
                                onChange={handleInputChange}
                                placeholder="https://linkedin.com/in/..."
                            />
                        </div>
                        <div className="form-group">
                            <label>GitHub URL</label>
                            <input
                                type="url"
                                name="github"
                                className="form-control"
                                value={formData.github}
                                onChange={handleInputChange}
                                placeholder="https://github.com/..."
                            />
                        </div>
                        <div className="form-group">
                            <label>Instagram URL</label>
                            <input
                                type="url"
                                name="instagram"
                                className="form-control"
                                value={formData.instagram}
                                onChange={handleInputChange}
                                placeholder="https://instagram.com/..."
                            />
                        </div>
                        <div className="form-group">
                            <label>Twitter/X URL</label>
                            <input
                                type="url"
                                name="twitter"
                                className="form-control"
                                value={formData.twitter}
                                onChange={handleInputChange}
                                placeholder="https://x.com/..."
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading || uploadingImage}>
                        {uploadingImage ? 'Uploading Image...' : (loading ? 'Submitting...' : 'Submit Profile 🚀')}
                    </button>

                    {status.message && (
                        <div className={`status-message ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default JoinTeam;
