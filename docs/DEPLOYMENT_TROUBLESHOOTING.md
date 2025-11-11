# Deployment Troubleshooting Guide

## MongoDB Atlas Connection Issues

If form submissions are not being saved to your MongoDB Atlas database, follow these steps:

### 1. Check Environment Variables in Railway

Your Railway backend needs the following environment variables:

- `MONGO_URL` - Your MongoDB Atlas connection string
- `DB_NAME` - Your database name (e.g., `portfolio_db`)
- `CORS_ORIGINS` - Your frontend URL (e.g., `https://your-app.vercel.app`)

### 2. MongoDB Atlas Connection String Format

Your `MONGO_URL` should look like this:

```
mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```

**Important:**
- Replace `<username>` with your MongoDB Atlas username
- Replace `<password>` with your MongoDB Atlas password (URL-encoded if it contains special characters)
- Replace `<cluster-url>` with your cluster URL (e.g., `cluster0.xxxxx.mongodb.net`)
- The connection string should NOT include the database name at the end if you're using `DB_NAME` separately

### 3. MongoDB Atlas Network Access

Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0) or specifically from Railway's IP ranges.

1. Go to MongoDB Atlas Dashboard
2. Click on "Network Access" in the left sidebar
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere" (0.0.0.0/0) for development, or add Railway's IP ranges for production

### 4. MongoDB Atlas Database User

Ensure you have a database user created:

1. Go to MongoDB Atlas Dashboard
2. Click on "Database Access" in the left sidebar
3. Ensure you have a user with read/write permissions
4. The username and password should match what's in your `MONGO_URL`

### 5. Test Database Connection

After deploying to Railway, test the database connection:

1. Visit: `https://your-railway-app.up.railway.app/health/db`
2. You should see:
   ```json
   {
     "status": "healthy",
     "database": "connected",
     "message": "Database connection is working"
   }
   ```

If you see an error, check the Railway logs for detailed error messages.

### 6. Check Railway Logs

1. Go to your Railway project dashboard
2. Click on your backend service
3. Click on "Deployments" tab
4. Click on the latest deployment
5. Check the logs for any database connection errors

Look for messages like:
- `❌ Failed to connect to MongoDB`
- `❌ Database connection error`
- `MONGO_URL environment variable is not set`

### 7. Common Issues and Solutions

#### Issue: "MONGO_URL environment variable is not set"
**Solution:** Add the `MONGO_URL` environment variable in Railway:
1. Go to your Railway project
2. Click on your backend service
3. Go to "Variables" tab
4. Add `MONGO_URL` with your MongoDB Atlas connection string

#### Issue: "Authentication failed"
**Solution:** 
- Check your MongoDB Atlas username and password
- Ensure the password is URL-encoded if it contains special characters
- Verify the database user has the correct permissions

#### Issue: "Server selection timeout"
**Solution:**
- Check your MongoDB Atlas network access settings
- Ensure Railway's IP is allowed (or use 0.0.0.0/0 for development)
- Verify your connection string is correct

#### Issue: "Database connection test failed"
**Solution:**
- Check Railway logs for detailed error messages
- Verify `MONGO_URL` and `DB_NAME` are set correctly
- Test the connection string locally using MongoDB Compass

### 8. Verify Form Submission

After fixing the database connection:

1. Submit a test form from your frontend
2. Check Railway logs for:
   - `📥 Received contact form submission from ...`
   - `💾 Saved contact message to database with ID: ...`
   - `✅ Contact form submission successful from ...`

3. Check MongoDB Atlas:
   - Go to your MongoDB Atlas Dashboard
   - Click on "Browse Collections"
   - Select your database
   - Check the `contact_messages` collection
   - You should see your test submission

### 9. Frontend Environment Variables

Ensure your Vercel frontend has the correct environment variable:

- `REACT_APP_BACKEND_URL` - Your Railway backend URL (e.g., `https://your-railway-app.up.railway.app`)

### 10. CORS Configuration

Ensure your Railway backend has the correct CORS configuration:

- `CORS_ORIGINS` - Your Vercel frontend URL (e.g., `https://your-app.vercel.app`)

If you have multiple origins, separate them with commas:
```
CORS_ORIGINS=https://your-app.vercel.app,https://www.your-app.vercel.app
```

## Testing Locally

Before deploying, test the connection locally:

1. Create a `.env` file in the `backend/` directory:
   ```
   MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
   DB_NAME=portfolio_db
   CORS_ORIGINS=http://localhost:3000
   ```

2. Start your backend:
   ```bash
   cd backend
   python server.py
   ```

3. Test the database connection:
   ```bash
   curl http://localhost:8000/health/db
   ```

4. Submit a test form from your local frontend

5. Check your MongoDB Atlas database to verify the data was saved

## Getting Help

If you're still experiencing issues:

1. Check Railway logs for error messages
2. Check MongoDB Atlas logs for connection attempts
3. Verify all environment variables are set correctly
4. Test the MongoDB Atlas connection string using MongoDB Compass
5. Check the `/health/db` endpoint for database status

## Summary Checklist

- [ ] `MONGO_URL` is set in Railway with correct MongoDB Atlas connection string
- [ ] `DB_NAME` is set in Railway
- [ ] `CORS_ORIGINS` is set in Railway with your Vercel frontend URL
- [ ] MongoDB Atlas network access allows connections from Railway (0.0.0.0/0)
- [ ] MongoDB Atlas database user has read/write permissions
- [ ] `/health/db` endpoint returns "healthy" status
- [ ] Railway logs show successful database connection
- [ ] Form submissions appear in MongoDB Atlas `contact_messages` collection

