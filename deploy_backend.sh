#!/bin/bash

# Deploy script for GDG Chat Backend
echo "🚀 Starting Deployment to Google Cloud Run..."

# Enable necessary APIs (just in case)
# gcloud services enable run.googleapis.com cloudbuild.googleapis.com

cd backend

# Deploy using source (Cloud Build)
gcloud run deploy gdg-chat-backend \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --project gdg-codelab-6bcdd

echo "✅ Deployment Command Finished."
