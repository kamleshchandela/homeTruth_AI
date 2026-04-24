import os

pr_data = [
    ('chore/root-initialization', 'chore: root package.json and readme', 'Initializes the root repository with a base package.json and README.', ['Added root package.json', 'Added README.md'], 'Sets up the foundational repository information.', ['No code included yet']),
    ('chore/root-gitignore', 'chore: add root gitignore', 'Adds a root .gitignore to prevent committing node_modules and env files.', ['Added .gitignore'], 'Keeps the repository clean from the start.', ['Standard Node/React ignores']),
    ('feat/backend-init', 'feat: initialize backend folder', 'Creates the backend directory and basic package.json.', ['Created backend folder', 'Added backend/package.json'], 'Prepares backend environment.', ['Dependencies will be added later']),
    ('feat/frontend-init', 'feat: initialize frontend project', 'Bootstraps the frontend with Vite and React.', ['Created frontend folder', 'Added React/Vite boilerplate'], 'Sets up frontend environment.', ['Basic UI only']),
    ('chore/frontend-config', 'chore: add frontend build config', 'Configures Vite and Tailwind CSS.', ['Added vite.config.js', 'Added tailwind.config.js', 'Added eslint.config.js'], 'Ensures styling and build tools are ready.', ['No UI changes']),
    ('feat/backend-folder-structure', 'feat: added backend folder structure', 'This PR adds the initial backend folder structure to organize the project in a scalable and maintainable way.', ['Added structured backend directories for better organization', 'Organized folders for controllers, routes, models, and middleware', 'Prepared base structure for future backend development'], 'Provides a clean starting point for backend development and ensures a consistent project structure.', ['No business logic or API implementation included', 'Only folder structure setup']),
    ('chore/backend-env-setup', 'chore: backend env configuration', 'Adds environment variable configurations.', ['Added .env.example', 'Configured backend dotenv loading'], 'Keeps secrets secure and easily configurable.', ['Requires local .env creation after merge']),
    ('feat/database-connection', 'feat: mongodb connection setup', 'Implements database connection logic.', ['Added config/db.js', 'Implemented mongoose connection'], 'Allows backend to communicate with the database.', ['Assumes DB is running']),
    ('feat/server-entry', 'feat: express server entry point', 'Creates the main Express server file.', ['Added backend/index.js', 'Setup basic app listening'], 'Starts up the backend API server.', ['No routes yet']),
    ('feat/backend-middleware-setup', 'feat: global middleware setup', 'Adds global middleware for CORS and JSON parsing.', ['Added CORS config in index.js', 'Added express.json middleware'], 'Ensures frontend can communicate with backend.', ['Basic security setup']),
    ('feat/user-model', 'feat: user database model', 'Creates the Mongoose User model.', ['Added models/User.js', 'Defined user schema fields'], 'Prepares database structure for users.', ['No controllers using this yet']),
    ('feat/auth-routes', 'feat: authentication routes base', 'Adds base routes for authentication.', ['Added routes/auth.js', 'Connected auth routes to index.js'], 'Prepares endpoints for login/signup.', ['Controllers are mocked']),
    ('feat/auth-controllers', 'feat: authentication controllers', 'Implements logic for user signup and login.', ['Added controllers/authController.js', 'Implemented password hashing'], 'Allows users to register and authenticate.', ['Needs JWT integration']),
    ('feat/jwt-utils', 'feat: jwt utility functions', 'Adds JWT generation and verification utils.', ['Added utils/jwt.js'], 'Handles token lifecycle for auth.', ['Used by auth controllers']),
    ('feat/auth-middleware', 'feat: auth protection middleware', 'Creates middleware to protect secure routes.', ['Added middleware/authMiddleware.js'], 'Secures endpoints from unauthorized access.', ['Extracts token from headers']),
    ('feat/property-model', 'feat: property database model', 'Creates the Mongoose Property model.', ['Added models/Property.js', 'Defined schema for real estate properties'], 'Prepares DB for property listings.', ['Includes location data']),
    ('feat/property-routes', 'feat: property api routes', 'Adds endpoints to fetch properties.', ['Added routes/properties.js'], 'Allows frontend to query listings.', ['Connected to server entry']),
    ('feat/property-controllers', 'feat: property controllers', 'Implements logic to fetch and filter properties.', ['Added controllers/propertyController.js'], 'Handles business logic for properties.', ['Supports basic querying']),
    ('feat/service-provider-model', 'feat: service provider model', 'Creates the Service Provider model.', ['Added models/ServiceProvider.js'], 'Prepares DB for marketplace providers.', ['Includes specialty fields']),
    ('feat/service-provider-routes', 'feat: service provider routes', 'Adds endpoints for providers.', ['Added routes/serviceProviders.js'], 'Prepares provider API.', ['Basic CRUD definitions']),
    ('feat/service-provider-controllers', 'feat: service provider controllers', 'Implements provider fetching logic.', ['Added controllers/providerController.js'], 'Handles marketplace data retrieval.', ['No booking logic yet']),
    ('feat/booking-model', 'feat: booking database model', 'Creates the Booking model for sessions.', ['Added models/Booking.js'], 'Stores user bookings with providers.', ['References users and providers']),
    ('feat/booking-routes', 'feat: booking api routes', 'Adds endpoints for session bookings.', ['Added routes/bookings.js'], 'Allows users to create bookings.', ['Requires auth middleware']),
    ('feat/booking-controllers', 'feat: booking controllers', 'Implements logic to handle session bookings.', ['Added controllers/bookingController.js'], 'Processes booking requests.', ['Validates provider availability']),
    ('feat/database-seeder', 'feat: database seeder script', 'Adds a script to seed initial data.', ['Added seedExplore.js', 'Added sample properties'], 'Allows quick local environment setup.', ['Run manually via node']),
    ('feat/frontend-folder-structure', 'feat: frontend src structure', 'Organizes the React src directory.', ['Added components, pages, layouts folders', 'Added utils and contexts folders'], 'Provides clean UI architecture.', ['Folders only']),
    ('feat/frontend-router', 'feat: react router setup', 'Configures base routing for the frontend.', ['Added react-router-dom', 'Setup BrowserRouter in App.jsx'], 'Enables page navigation.', ['No actual pages yet']),
    ('feat/global-styles', 'feat: base css and typography', 'Adds index.css with global resets.', ['Configured Tailwind directives', 'Added custom font imports'], 'Ensures consistent typography.', ['Applied globally']),
    ('feat/main-layout', 'feat: main application layout', 'Creates MainLayout to wrap pages.', ['Added layouts/MainLayout.jsx', 'Added Outlet for nested routes'], 'Ensures consistent page structure.', ['Navbar/Footer missing']),
    ('feat/navbar-component', 'feat: global navbar component', 'Builds the top navigation bar UI.', ['Added components/Navbar.jsx', 'Implemented desktop and mobile links'], 'Allows users to navigate the app.', ['Static links for now']),
    ('feat/footer-component', 'feat: global footer component', 'Builds the application footer.', ['Added components/Footer.jsx', 'Added links and copyright'], 'Completes page shell.', ['Static content']),
    ('feat/splash-screen', 'feat: intro splash screen', 'Adds a splash screen for initial load.', ['Added components/SplashScreen.jsx', 'Added loading animations'], 'Improves perceived loading time.', ['Auto-hides after timeout']),
    ('feat/auth-context', 'feat: global auth state context', 'Adds React Context for user authentication.', ['Added contexts/AuthContext.jsx', 'Implemented login/logout methods'], 'Manages user state across app.', ['Mocked state initially']),
    ('feat/api-service', 'feat: axios api utility', 'Configures base API client.', ['Added utils/api.js', 'Configured base URL and interceptors'], 'Simplifies backend communication.', ['Injects JWT automatically']),
    ('feat/protected-route', 'feat: protected route wrapper', 'Adds a component to protect secure pages.', ['Added components/ProtectedRoute.jsx', 'Redirects unauthenticated users'], 'Secures frontend routes.', ['Uses AuthContext']),
    ('feat/landing-page-ui', 'feat: landing page ui', 'Builds the main home page design.', ['Added pages/LandingPage.jsx', 'Added hero section and feature highlights'], 'Provides the main entry point.', ['Static data only']),
    ('feat/login-page-ui', 'feat: login page ui', 'Builds the login form interface.', ['Added pages/LoginPage.jsx', 'Added form validation'], 'Allows users to enter credentials.', ['No API call yet']),
    ('feat/signup-page-ui', 'feat: signup page ui', 'Builds the registration interface.', ['Added pages/SignupPage.jsx', 'Added multi-step form structure'], 'Allows new users to join.', ['No API call yet']),
    ('feat/explore-page-base', 'feat: explore properties page base', 'Builds the shell for the property list.', ['Added pages/ExplorePage.jsx', 'Added filter sidebar layout'], 'Prepares listing display.', ['No real data yet']),
    ('feat/property-card-component', 'feat: reusable property card', 'Creates the UI for individual properties.', ['Added components/PropertyCard.jsx', 'Styled image, price, and details'], 'Ensures consistent property display.', ['Accepts props']),
    ('feat/property-detail-page', 'feat: property detail view', 'Builds the full page for a single property.', ['Added pages/PropertyDetail.jsx', 'Added image gallery and specs layout'], 'Shows in-depth listing info.', ['Static placeholders']),
    ('feat/services-page-base', 'feat: service marketplace page ui', 'Builds the UI for finding professionals.', ['Added pages/ServicesPage.jsx', 'Added category filters'], 'Allows discovery of service providers.', ['Static list']),
    ('feat/provider-card-component', 'feat: service provider card ui', 'Creates the UI for a provider profile.', ['Added components/ServiceProviderCard.jsx', 'Added rating and contact buttons'], 'Consistent display of professionals.', ['Used in ServicesPage']),
    ('feat/interactive-map-base', 'feat: interactive map base component', 'Integrates map layout for properties.', ['Added components/InteractiveMap.jsx', 'Configured map container'], 'Allows spatial discovery.', ['No markers yet']),
    ('feat/dashboard-layout', 'feat: user dashboard base', 'Builds the user profile layout.', ['Added pages/Dashboard.jsx', 'Added sidebar and content area'], 'Prepares user-specific views.', ['Requires login']),
    ('feat/auth-integration', 'feat: connect auth forms to backend', 'Hooks up Login and Signup to API.', ['Updated LoginPage and SignupPage', 'Integrated API calls'], 'Enables real authentication.', ['Updates AuthContext on success']),
    ('feat/navbar-auth-state', 'feat: dynamic navbar auth state', 'Updates Navbar based on login status.', ['Modified Navbar.jsx', 'Shows Profile/Logout if logged in'], 'Improves UX for logged-in users.', ['Uses AuthContext']),
    ('feat/explore-integration', 'feat: fetch properties on explore', 'Connects explore page to real backend data.', ['Updated ExplorePage.jsx', 'Added useEffect to fetch properties'], 'Shows real listings.', ['Maps data to PropertyCard']),
    ('feat/map-data-integration', 'feat: add property markers to map', 'Populates map with real data.', ['Updated InteractiveMap.jsx', 'Added dynamic markers'], 'Makes map functional.', ['Clicking marker opens detail']),
    ('feat/services-integration', 'feat: fetch providers from api', 'Connects services page to backend.', ['Updated ServicesPage.jsx', 'Added API call for providers'], 'Shows real marketplace data.', ['Maps to ProviderCard']),
    ('feat/booking-flow-ui', 'feat: session booking modal', 'Adds a modal to book a professional.', ['Added components/BookingModal.jsx', 'Added date/time selection'], 'Prepares booking flow.', ['UI only']),
    ('feat/booking-integration', 'feat: connect booking to backend', 'Hooks up booking modal to API.', ['Updated BookingModal.jsx', 'Added API submission'], 'Allows real session bookings.', ['Handles success/error states']),
    ('feat/dashboard-integration', 'feat: populate dashboard with user data', 'Fetches real user info and bookings.', ['Updated Dashboard.jsx', 'Added API calls for profile'], 'Shows personalized dashboard.', ['Lists past bookings']),
    ('feat/sell-home-page', 'feat: sell home page ui', 'Builds the form for listing a new home.', ['Added pages/SellHomePage.jsx', 'Added form fields for property details'], 'Allows users to create listings.', ['No submission logic yet']),
    ('feat/sell-home-integration', 'feat: connect sell form to api', 'Connects property creation form to backend.', ['Updated SellHomePage.jsx', 'Added API POST request'], 'Completes property listing flow.', ['Redirects to detail on success'])
]

with open("PR_History.md", "w") as f:
    f.write("# Realistic GitHub Pull Request History\n\n")
    for i, (branch, title, desc, changes, purpose, notes) in enumerate(pr_data, 1):
        f.write(f"## PR #{i}\n\n")
        f.write(f"**PR Title:**\n{title}\n\n")
        f.write(f"**PR Description:**\n{desc}\n\n")
        f.write("### Changes\n")
        for change in changes:
            f.write(f"* {change}\n")
        f.write("\n### Purpose\n")
        f.write(f"{purpose}\n\n")
        f.write("### Notes\n")
        for note in notes:
            f.write(f"* {note}\n")
        f.write("\n---\n\n")

with open("merge_order.txt", "w") as f:
    for i, (branch, _, _, _, _, _) in enumerate(pr_data, 1):
        f.write(f"Step {i}: Merge PR #{i} (branch: {branch}) into main\n")

print('Files PR_History.md and merge_order.txt created successfully.')
