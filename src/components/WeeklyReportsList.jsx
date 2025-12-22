import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import './WeeklyReport.css'; // Reusing the same CSS

const WeeklyReportsList = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedWeek, setSelectedWeek] = useState('');

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const q = query(collection(db, 'weeklyReports'), orderBy('weekEnding', 'desc'));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setReports(data);
            } catch (error) {
                console.error("Error fetching reports:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    // Unique weeks for filter
    const weeks = [...new Set(reports.map(r => r.weekEnding))];

    const filteredReports = selectedWeek
        ? reports.filter(r => r.weekEnding === selectedWeek)
        : reports;

    return (
        <div className="weekly-report-container">
            <div className="weekly-report-header">
                <h2>Team Performance Monitor</h2>
                <p>Review weekly submissions and progress.</p>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <select
                    className="form-control"
                    style={{ maxWidth: '300px', margin: '0 auto', display: 'inline-block' }}
                    value={selectedWeek}
                    onChange={(e) => setSelectedWeek(e.target.value)}
                >
                    <option value="">All Weeks</option>
                    {weeks.map(week => (
                        <option key={week} value={week}>Week Ending: {week}</option>
                    ))}
                </select>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>Loading reports...</div>
            ) : (
                <div className="reports-grid">
                    {filteredReports.map((report, index) => (
                        <motion.div
                            key={report.id}
                            className="weekly-report-card"
                            style={{ padding: '25px', marginBottom: '20px' }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ margin: 0, color: '#4285F4' }}>{report.name}</h3>
                                    {report.role && <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #666)', marginTop: '4px' }}>{report.role}</span>}
                                </div>
                                <span style={{ fontSize: '0.9rem', color: '#888' }}>{report.weekEnding}</span>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px', color: '#34A853' }}>Completed:</strong>
                                <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{report.tasksCompleted}</p>
                            </div>

                            {report.challenges && (
                                <div style={{ marginBottom: '15px' }}>
                                    <strong style={{ display: 'block', marginBottom: '5px', color: '#EA4335' }}>Challenges:</strong>
                                    <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{report.challenges}</p>
                                </div>
                            )}

                            {report.nextWeekPlan && (
                                <div style={{ marginBottom: '15px' }}>
                                    <strong style={{ display: 'block', marginBottom: '5px', color: '#FBBC05' }}>Next Week:</strong>
                                    <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{report.nextWeekPlan}</p>
                                </div>
                            )}

                            {report.prLinks && (
                                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <strong style={{ fontSize: '0.9rem' }}>Proof of Work:</strong>
                                    <div style={{ fontSize: '0.9rem', wordBreak: 'break-all' }}>{report.prLinks}</div>
                                </div>
                            )}
                        </motion.div>
                    ))}

                    {filteredReports.length === 0 && (
                        <p style={{ textAlign: 'center' }}>No reports found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default WeeklyReportsList;
