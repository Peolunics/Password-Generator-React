# Password Generator

A simple and responsive password generator built with React.js and Tailwind CSS. This application allows users to generate strong passwords based on custom length and optional inclusion of numbers and special characters.

## Features
- Generate a random password with adjustable length (6 to 100 characters)
- Option to include numbers and special characters
- Copy the generated password to the clipboard with a single click
- Responsive UI with a clean and modern design using Tailwind CSS

## Technologies Used
- **React.js**: Functional components, hooks (`useState`, `useCallback`, `useEffect`, `useRef`)
- **Tailwind CSS**: Styling and layout
- **JavaScript**: Logic for password generation

## How It Works
1. Adjust the password length using the range slider.
2. Check the boxes to include numbers and/or special characters.
3. The password is automatically generated based on the selected criteria.
4. Click the "Copy" button to copy the password to the clipboard.

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/password-generator.git
   ```
2. Navigate to the project folder:
   ```sh
   cd password-generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm start
   ```
5. Open your browser and go to `http://localhost:3000`

## File Structure
```
password-generator/
│── src/
│   ├── App.js       # Main React component
│   ├── index.js     # Entry point
│── public/
│── package.json    # Dependencies and scripts
│── README.md       # Project documentation
```

## Future Enhancements
- Add a strength indicator for the generated password
- Provide an option to exclude similar-looking characters
- Improve UI/UX with animations

## License
This project is open-source and available under the MIT License.

## Author
**Akash Vijay**

