# Realistic GitHub Pull Request History

## PR #1

**PR Title:**
chore: root package.json and readme

**PR Description:**
Initializes the root repository with a base package.json and README.

### Changes
* Added root package.json
* Added README.md

### Purpose
Sets up the foundational repository information.

### Notes
* No code included yet

---

## PR #2

**PR Title:**
chore: add root gitignore

**PR Description:**
Adds a root .gitignore to prevent committing node_modules and env files.

### Changes
* Added .gitignore

### Purpose
Keeps the repository clean from the start.

### Notes
* Standard Node/React ignores

---

## PR #3

**PR Title:**
feat: initialize backend folder

**PR Description:**
Creates the backend directory and basic package.json.

### Changes
* Created backend folder
* Added backend/package.json

### Purpose
Prepares backend environment.

### Notes
* Dependencies will be added later

---

## PR #4

**PR Title:**
feat: initialize frontend project

**PR Description:**
Bootstraps the frontend with Vite and React.

### Changes
* Created frontend folder
* Added React/Vite boilerplate

### Purpose
Sets up frontend environment.

### Notes
* Basic UI only

---

## PR #5

**PR Title:**
chore: add frontend build config

**PR Description:**
Configures Vite and Tailwind CSS.

### Changes
* Added vite.config.js
* Added tailwind.config.js
* Added eslint.config.js

### Purpose
Ensures styling and build tools are ready.

### Notes
* No UI changes

---

## PR #6

**PR Title:**
feat: added backend folder structure

**PR Description:**
This PR adds the initial backend folder structure to organize the project in a scalable and maintainable way.

### Changes
* Added structured backend directories for better organization
* Organized folders for controllers, routes, models, and middleware
* Prepared base structure for future backend development

### Purpose
Provides a clean starting point for backend development and ensures a consistent project structure.

### Notes
* No business logic or API implementation included
* Only folder structure setup

---

## PR #7

**PR Title:**
chore: backend env configuration

**PR Description:**
Adds environment variable configurations.

### Changes
* Added .env.example
* Configured backend dotenv loading

### Purpose
Keeps secrets secure and easily configurable.

### Notes
* Requires local .env creation after merge

---

## PR #8

**PR Title:**
feat: mongodb connection setup

**PR Description:**
Implements database connection logic.

### Changes
* Added config/db.js
* Implemented mongoose connection

### Purpose
Allows backend to communicate with the database.

### Notes
* Assumes DB is running

---

## PR #9

**PR Title:**
feat: express server entry point

**PR Description:**
Creates the main Express server file.

### Changes
* Added backend/index.js
* Setup basic app listening

### Purpose
Starts up the backend API server.

### Notes
* No routes yet

---

## PR #10

**PR Title:**
feat: global middleware setup

**PR Description:**
Adds global middleware for CORS and JSON parsing.

### Changes
* Added CORS config in index.js
* Added express.json middleware

### Purpose
Ensures frontend can communicate with backend.

### Notes
* Basic security setup

---

## PR #11

**PR Title:**
feat: user database model

**PR Description:**
Creates the Mongoose User model.

### Changes
* Added models/User.js
* Defined user schema fields

### Purpose
Prepares database structure for users.

### Notes
* No controllers using this yet

---

## PR #12

**PR Title:**
feat: authentication routes base

**PR Description:**
Adds base routes for authentication.

### Changes
* Added routes/auth.js
* Connected auth routes to index.js

### Purpose
Prepares endpoints for login/signup.

### Notes
* Controllers are mocked

---

## PR #13

**PR Title:**
feat: authentication controllers

**PR Description:**
Implements logic for user signup and login.

### Changes
* Added controllers/authController.js
* Implemented password hashing

### Purpose
Allows users to register and authenticate.

### Notes
* Needs JWT integration

---

## PR #14

**PR Title:**
feat: jwt utility functions

**PR Description:**
Adds JWT generation and verification utils.

### Changes
* Added utils/jwt.js

### Purpose
Handles token lifecycle for auth.

### Notes
* Used by auth controllers

---

## PR #15

**PR Title:**
feat: auth protection middleware

**PR Description:**
Creates middleware to protect secure routes.

### Changes
* Added middleware/authMiddleware.js

### Purpose
Secures endpoints from unauthorized access.

### Notes
* Extracts token from headers

---

## PR #16

**PR Title:**
feat: property database model

**PR Description:**
Creates the Mongoose Property model.

### Changes
* Added models/Property.js
* Defined schema for real estate properties

### Purpose
Prepares DB for property listings.

### Notes
* Includes location data

---

## PR #17

**PR Title:**
feat: property api routes

**PR Description:**
Adds endpoints to fetch properties.

### Changes
* Added routes/properties.js

### Purpose
Allows frontend to query listings.

### Notes
* Connected to server entry

---

## PR #18

**PR Title:**
feat: property controllers

**PR Description:**
Implements logic to fetch and filter properties.

### Changes
* Added controllers/propertyController.js

### Purpose
Handles business logic for properties.

### Notes
* Supports basic querying

---

## PR #19

**PR Title:**
feat: service provider model

**PR Description:**
Creates the Service Provider model.

### Changes
* Added models/ServiceProvider.js

### Purpose
Prepares DB for marketplace providers.

### Notes
* Includes specialty fields

---

## PR #20

**PR Title:**
feat: service provider routes

**PR Description:**
Adds endpoints for providers.

### Changes
* Added routes/serviceProviders.js

### Purpose
Prepares provider API.

### Notes
* Basic CRUD definitions

---

## PR #21

**PR Title:**
feat: service provider controllers

**PR Description:**
Implements provider fetching logic.

### Changes
* Added controllers/providerController.js

### Purpose
Handles marketplace data retrieval.

### Notes
* No booking logic yet

---

## PR #22

**PR Title:**
feat: booking database model

**PR Description:**
Creates the Booking model for sessions.

### Changes
* Added models/Booking.js

### Purpose
Stores user bookings with providers.

### Notes
* References users and providers

---

## PR #23

**PR Title:**
feat: booking api routes

**PR Description:**
Adds endpoints for session bookings.

### Changes
* Added routes/bookings.js

### Purpose
Allows users to create bookings.

### Notes
* Requires auth middleware

---

## PR #24

**PR Title:**
feat: booking controllers

**PR Description:**
Implements logic to handle session bookings.

### Changes
* Added controllers/bookingController.js

### Purpose
Processes booking requests.

### Notes
* Validates provider availability

---

## PR #25

**PR Title:**
feat: database seeder script

**PR Description:**
Adds a script to seed initial data.

### Changes
* Added seedExplore.js
* Added sample properties

### Purpose
Allows quick local environment setup.

### Notes
* Run manually via node

---

## PR #26

**PR Title:**
feat: frontend src structure

**PR Description:**
Organizes the React src directory.

### Changes
* Added components, pages, layouts folders
* Added utils and contexts folders

### Purpose
Provides clean UI architecture.

### Notes
* Folders only

---

## PR #27

**PR Title:**
feat: react router setup

**PR Description:**
Configures base routing for the frontend.

### Changes
* Added react-router-dom
* Setup BrowserRouter in App.jsx

### Purpose
Enables page navigation.

### Notes
* No actual pages yet

---

## PR #28

**PR Title:**
feat: base css and typography

**PR Description:**
Adds index.css with global resets.

### Changes
* Configured Tailwind directives
* Added custom font imports

### Purpose
Ensures consistent typography.

### Notes
* Applied globally

---

## PR #29

**PR Title:**
feat: main application layout

**PR Description:**
Creates MainLayout to wrap pages.

### Changes
* Added layouts/MainLayout.jsx
* Added Outlet for nested routes

### Purpose
Ensures consistent page structure.

### Notes
* Navbar/Footer missing

---

## PR #30

**PR Title:**
feat: global navbar component

**PR Description:**
Builds the top navigation bar UI.

### Changes
* Added components/Navbar.jsx
* Implemented desktop and mobile links

### Purpose
Allows users to navigate the app.

### Notes
* Static links for now

---

## PR #31

**PR Title:**
feat: global footer component

**PR Description:**
Builds the application footer.

### Changes
* Added components/Footer.jsx
* Added links and copyright

### Purpose
Completes page shell.

### Notes
* Static content

---

## PR #32

**PR Title:**
feat: intro splash screen

**PR Description:**
Adds a splash screen for initial load.

### Changes
* Added components/SplashScreen.jsx
* Added loading animations

### Purpose
Improves perceived loading time.

### Notes
* Auto-hides after timeout

---

## PR #33

**PR Title:**
feat: global auth state context

**PR Description:**
Adds React Context for user authentication.

### Changes
* Added contexts/AuthContext.jsx
* Implemented login/logout methods

### Purpose
Manages user state across app.

### Notes
* Mocked state initially

---

## PR #34

**PR Title:**
feat: axios api utility

**PR Description:**
Configures base API client.

### Changes
* Added utils/api.js
* Configured base URL and interceptors

### Purpose
Simplifies backend communication.

### Notes
* Injects JWT automatically

---

## PR #35

**PR Title:**
feat: protected route wrapper

**PR Description:**
Adds a component to protect secure pages.

### Changes
* Added components/ProtectedRoute.jsx
* Redirects unauthenticated users

### Purpose
Secures frontend routes.

### Notes
* Uses AuthContext

---

## PR #36

**PR Title:**
feat: landing page ui

**PR Description:**
Builds the main home page design.

### Changes
* Added pages/LandingPage.jsx
* Added hero section and feature highlights

### Purpose
Provides the main entry point.

### Notes
* Static data only

---

## PR #37

**PR Title:**
feat: login page ui

**PR Description:**
Builds the login form interface.

### Changes
* Added pages/LoginPage.jsx
* Added form validation

### Purpose
Allows users to enter credentials.

### Notes
* No API call yet

---

## PR #38

**PR Title:**
feat: signup page ui

**PR Description:**
Builds the registration interface.

### Changes
* Added pages/SignupPage.jsx
* Added multi-step form structure

### Purpose
Allows new users to join.

### Notes
* No API call yet

---

## PR #39

**PR Title:**
feat: explore properties page base

**PR Description:**
Builds the shell for the property list.

### Changes
* Added pages/ExplorePage.jsx
* Added filter sidebar layout

### Purpose
Prepares listing display.

### Notes
* No real data yet

---

## PR #40

**PR Title:**
feat: reusable property card

**PR Description:**
Creates the UI for individual properties.

### Changes
* Added components/PropertyCard.jsx
* Styled image, price, and details

### Purpose
Ensures consistent property display.

### Notes
* Accepts props

---

## PR #41

**PR Title:**
feat: property detail view

**PR Description:**
Builds the full page for a single property.

### Changes
* Added pages/PropertyDetail.jsx
* Added image gallery and specs layout

### Purpose
Shows in-depth listing info.

### Notes
* Static placeholders

---

## PR #42

**PR Title:**
feat: service marketplace page ui

**PR Description:**
Builds the UI for finding professionals.

### Changes
* Added pages/ServicesPage.jsx
* Added category filters

### Purpose
Allows discovery of service providers.

### Notes
* Static list

---

## PR #43

**PR Title:**
feat: service provider card ui

**PR Description:**
Creates the UI for a provider profile.

### Changes
* Added components/ServiceProviderCard.jsx
* Added rating and contact buttons

### Purpose
Consistent display of professionals.

### Notes
* Used in ServicesPage

---

## PR #44

**PR Title:**
feat: interactive map base component

**PR Description:**
Integrates map layout for properties.

### Changes
* Added components/InteractiveMap.jsx
* Configured map container

### Purpose
Allows spatial discovery.

### Notes
* No markers yet

---

## PR #45

**PR Title:**
feat: user dashboard base

**PR Description:**
Builds the user profile layout.

### Changes
* Added pages/Dashboard.jsx
* Added sidebar and content area

### Purpose
Prepares user-specific views.

### Notes
* Requires login

---

## PR #46

**PR Title:**
feat: connect auth forms to backend

**PR Description:**
Hooks up Login and Signup to API.

### Changes
* Updated LoginPage and SignupPage
* Integrated API calls

### Purpose
Enables real authentication.

### Notes
* Updates AuthContext on success

---

## PR #47

**PR Title:**
feat: dynamic navbar auth state

**PR Description:**
Updates Navbar based on login status.

### Changes
* Modified Navbar.jsx
* Shows Profile/Logout if logged in

### Purpose
Improves UX for logged-in users.

### Notes
* Uses AuthContext

---

## PR #48

**PR Title:**
feat: fetch properties on explore

**PR Description:**
Connects explore page to real backend data.

### Changes
* Updated ExplorePage.jsx
* Added useEffect to fetch properties

### Purpose
Shows real listings.

### Notes
* Maps data to PropertyCard

---

## PR #49

**PR Title:**
feat: add property markers to map

**PR Description:**
Populates map with real data.

### Changes
* Updated InteractiveMap.jsx
* Added dynamic markers

### Purpose
Makes map functional.

### Notes
* Clicking marker opens detail

---

## PR #50

**PR Title:**
feat: fetch providers from api

**PR Description:**
Connects services page to backend.

### Changes
* Updated ServicesPage.jsx
* Added API call for providers

### Purpose
Shows real marketplace data.

### Notes
* Maps to ProviderCard

---

## PR #51

**PR Title:**
feat: session booking modal

**PR Description:**
Adds a modal to book a professional.

### Changes
* Added components/BookingModal.jsx
* Added date/time selection

### Purpose
Prepares booking flow.

### Notes
* UI only

---

## PR #52

**PR Title:**
feat: connect booking to backend

**PR Description:**
Hooks up booking modal to API.

### Changes
* Updated BookingModal.jsx
* Added API submission

### Purpose
Allows real session bookings.

### Notes
* Handles success/error states

---

## PR #53

**PR Title:**
feat: populate dashboard with user data

**PR Description:**
Fetches real user info and bookings.

### Changes
* Updated Dashboard.jsx
* Added API calls for profile

### Purpose
Shows personalized dashboard.

### Notes
* Lists past bookings

---

## PR #54

**PR Title:**
feat: sell home page ui

**PR Description:**
Builds the form for listing a new home.

### Changes
* Added pages/SellHomePage.jsx
* Added form fields for property details

### Purpose
Allows users to create listings.

### Notes
* No submission logic yet

---

## PR #55

**PR Title:**
feat: connect sell form to api

**PR Description:**
Connects property creation form to backend.

### Changes
* Updated SellHomePage.jsx
* Added API POST request

### Purpose
Completes property listing flow.

### Notes
* Redirects to detail on success

---

