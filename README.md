# AP College Football Poll Simulator

A comprehensive web application that simulates the AP College Football Poll, allowing users to submit their top 25 rankings and view compiled results.

## Features

### 🏆 Core Functionality
- **Interactive Poll Submission**: Submit your top 25 college football team rankings
- **Real-time Poll Compilation**: Automatic calculation of average positions based on all submissions
- **Team Validation**: Comprehensive FBS team database with search functionality to prevent duplicates
- **Poll History**: View previous weeks' poll results and track changes over time

### 📊 User Interface
- **Sleek Design**: Modern, responsive interface with gradient backgrounds and smooth animations
- **Tabbed Navigation**: Easy switching between current poll, submission form, history, and Excel upload
- **Search & Filter**: Quick team search with conference and mascot information
- **Visual Rankings**: Color-coded top 3 positions with gold, silver, and bronze styling

### 📁 Data Management
- **Excel Upload**: Bulk submission support via Excel file upload (.xlsx/.xls)
- **Data Export**: Export poll data and submissions in JSON format
- **Local Storage**: Persistent data storage using browser localStorage
- **Poll History**: Complete historical record of all poll weeks

### 🔧 Technical Features
- **Form Validation**: Ensures all 25 positions are filled with unique teams
- **Duplicate Prevention**: Automatic detection and prevention of duplicate team selections
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Comprehensive error messages and user feedback

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Download all files to a local directory
2. Open `index.html` in your web browser
3. Start submitting rankings!

### File Structure
```
AP Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and data management
└── README.md           # This documentation file
```

## How to Use

### Submitting Rankings
1. Click on the "Submit Rankings" tab
2. Enter your name (optional)
3. Click on each ranking position to select a team
4. Use the search function to quickly find teams
5. Ensure all 25 positions are filled with unique teams
6. Click "Submit Rankings" to save your poll

### Excel Upload
1. Click on the "Excel Upload" tab
2. Prepare your Excel file with:
   - Column A: Team names (must match official FBS names)
   - Column B: Rankings (1-25)
   - Include a header row
3. Drag and drop your file or click to browse
4. Review the loaded rankings and submit

### Viewing Results
- **Current Poll**: View the latest compiled poll results
- **Poll History**: Browse previous weeks' results
- **Export Data**: Download complete poll data as JSON

## Team Database

The application includes a comprehensive database of all FBS teams with:
- Official team names
- Conference affiliations
- Mascot information
- Search functionality with fuzzy matching

## Poll Calculation

The poll uses a points-based system:
- 1st place: 25 points
- 2nd place: 24 points
- ...
- 25th place: 1 point

Teams are ranked by total points received across all submissions, with tiebreakers based on average ranking and number of appearances.

## Weekly Updates

The application is designed to support weekly poll updates. While the current version uses localStorage for data persistence, a production version would include:
- Automated weekly poll compilation
- Server-side data storage
- Email notifications for poll updates
- Social media integration

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Dependencies

- Font Awesome 6.0.0 (for icons)
- SheetJS (for Excel file processing)
- No additional frameworks required

## Future Enhancements

- [ ] Server-side data persistence
- [ ] User authentication and profiles
- [ ] Real-time collaboration features
- [ ] Mobile app development
- [ ] Social sharing capabilities
- [ ] Advanced analytics and statistics
- [ ] Email notifications
- [ ] API integration with real college football data

## Contributing

This is a standalone project, but suggestions and improvements are welcome! The codebase is well-documented and modular for easy enhancement.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the code comments or create an issue in the project repository.

---

**Note**: This is a simulation tool for educational and entertainment purposes. It is not affiliated with the Associated Press or any official college football organization.
