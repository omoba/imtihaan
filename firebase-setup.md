# Firebase Setup Instructions

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `ihsan-quiz`
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Setup Realtime Database

1. In Firebase Console, go to "Realtime Database"
2. Click "Create Database"
3. Choose "Start in test mode" (for development)
4. Select your preferred location
5. Click "Done"

## Step 3: Get Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon (</>) 
4. Register app name: `ihsan-quiz`
5. Copy the firebaseConfig object

## Step 4: Update HTML File

Replace the firebaseConfig in your HTML files with your config:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

## Step 5: Database Rules (Optional - for production)

In Realtime Database Rules tab, use:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true,
        ".indexOn": ["createdAt"]
      }
    }
  }
}
```

## Step 6: Deploy (Optional)

### Option A: Firebase Hosting (Free)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option B: Netlify (Free)
1. Drag and drop HTML file to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant URL

### Option C: GitHub Pages (Free)
1. Create GitHub repository
2. Upload HTML file
3. Enable Pages in repository settings

## How It Works

**Host Flow:**
1. Host creates room → gets 6-digit code
2. Shares code with players
3. Controls story display and quiz start
4. Sees real-time leaderboard

**Player Flow:**
1. Enters name and room code
2. Joins waiting room
3. Reads story when host shows it
4. Competes in timed quiz
5. Sees final rankings

**Features:**
- Real-time synchronization
- Live leaderboard
- Timed questions (30 seconds)
- Automatic scoring
- Mobile responsive
- No registration required

## Troubleshooting

**"Room not found" error:**
- Check room code spelling
- Ensure host created room first

**Connection issues:**
- Verify Firebase config is correct
- Check internet connection
- Try refreshing page

**Timer sync issues:**
- Firebase handles timing server-side
- Small delays are normal (1-2 seconds)