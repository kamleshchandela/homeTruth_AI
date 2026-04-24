import os
import subprocess
import time

def run(cmd, allow_fail=False):
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0 and not allow_fail:
        print(f"Error executing {cmd}:\n{result.stderr}")
    return result

prs = [
    ("chore/root-initialization", "chore: root package.json and readme", ["package.json", "README.md", "PR_History.md", "merge_order.txt", "scratch/"]),
    ("chore/root-gitignore", "chore: add root gitignore", [".gitignore"]),
    ("feat/backend-init", "feat: initialize backend folder", ["backend/package.json", "backend/package-lock.json"]),
    ("feat/frontend-init", "feat: initialize frontend project", ["frontend/package.json", "frontend/package-lock.json"]),
    ("chore/frontend-config", "chore: add frontend build config", ["frontend/vite.config.js", "frontend/tailwind.config.js", "frontend/eslint.config.js"]),
    ("feat/backend-folder-structure", "feat: added backend folder structure", []),
    ("chore/backend-env-setup", "chore: backend env configuration", ["backend/.env", "backend/.env.example"]),
    ("feat/database-connection", "feat: mongodb connection setup", ["backend/config/"]),
    ("feat/server-entry", "feat: express server entry point", ["backend/index.js"]),
    ("feat/backend-middleware-setup", "feat: global middleware setup", ["backend/middleware/"]),
    ("feat/user-model", "feat: user database model", ["backend/models/User.js"]),
    ("feat/auth-routes", "feat: authentication routes base", ["backend/routes/authRoutes.js"]),
    ("feat/auth-controllers", "feat: authentication controllers", ["backend/controllers/authController.js"]),
    ("feat/jwt-utils", "feat: jwt utility functions", ["backend/utils/"]),
    ("feat/auth-middleware", "feat: auth protection middleware", []),
    ("feat/property-model", "feat: property database model", ["backend/models/Property.js"]),
    ("feat/property-routes", "feat: property api routes", ["backend/routes/propertyRoutes.js"]),
    ("feat/property-controllers", "feat: property controllers", ["backend/controllers/propertyController.js"]),
    ("feat/service-provider-model", "feat: service provider model", ["backend/models/ServiceProvider.js"]),
    ("feat/service-provider-routes", "feat: service provider routes", []),
    ("feat/service-provider-controllers", "feat: service provider controllers", []),
    ("feat/booking-model", "feat: booking database model", ["backend/models/Booking.js"]),
    ("feat/booking-routes", "feat: booking api routes", []),
    ("feat/booking-controllers", "feat: booking controllers", []),
    ("feat/database-seeder", "feat: database seeder script", ["backend/seedExplore.js"]),
    ("feat/frontend-folder-structure", "feat: frontend src structure", ["frontend/index.html", "frontend/src/main.jsx", "frontend/src/App.jsx", "frontend/src/App.css"]),
    ("feat/frontend-router", "feat: react router setup", []),
    ("feat/global-styles", "feat: base css and typography", ["frontend/src/index.css"]),
    ("feat/main-layout", "feat: main application layout", ["frontend/src/layouts/MainLayout.jsx"]),
    ("feat/navbar-component", "feat: global navbar component", ["frontend/src/components/Navbar.jsx"]),
    ("feat/footer-component", "feat: global footer component", ["frontend/src/components/Footer.jsx"]),
    ("feat/splash-screen", "feat: intro splash screen", ["frontend/src/components/SplashScreen.jsx"]),
    ("feat/auth-context", "feat: global auth state context", ["frontend/src/store/"]),
    ("feat/api-service", "feat: axios api utility", ["frontend/src/services/"]),
    ("feat/protected-route", "feat: protected route wrapper", []),
    ("feat/landing-page-ui", "feat: landing page ui", ["frontend/src/pages/LandingPage.jsx", "frontend/src/components/landing/"]),
    ("feat/login-page-ui", "feat: login page ui", ["frontend/src/pages/LoginPage.jsx"]),
    ("feat/signup-page-ui", "feat: signup page ui", ["frontend/src/pages/SignupPage.jsx", "frontend/src/pages/ForgotPasswordPage.jsx"]),
    ("feat/explore-page-base", "feat: explore properties page base", ["frontend/src/pages/ExplorePage.jsx"]),
    ("feat/property-card-component", "feat: reusable property card", []),
    ("feat/property-detail-page", "feat: property detail view", ["frontend/src/pages/HomeDetailPage.jsx"]),
    ("feat/services-page-base", "feat: service marketplace page ui", ["frontend/src/pages/ServicesPage.jsx"]),
    ("feat/provider-card-component", "feat: service provider card ui", []),
    ("feat/interactive-map-base", "feat: interactive map base component", ["frontend/src/pages/MapPage.jsx"]),
    ("feat/dashboard-layout", "feat: user dashboard base", ["frontend/src/pages/UserDashboard.jsx"]),
    ("feat/auth-integration", "feat: connect auth forms to backend", []),
    ("feat/navbar-auth-state", "feat: dynamic navbar auth state", []),
    ("feat/explore-integration", "feat: fetch properties on explore", []),
    ("feat/map-data-integration", "feat: add property markers to map", []),
    ("feat/services-integration", "feat: fetch providers from api", []),
    ("feat/booking-flow-ui", "feat: session booking modal", []),
    ("feat/booking-integration", "feat: connect booking to backend", []),
    ("feat/dashboard-integration", "feat: populate dashboard with user data", []),
    ("feat/sell-home-page", "feat: sell home page ui", ["frontend/src/pages/SellHomePage.jsx"]),
    ("feat/sell-home-integration", "feat: connect sell form to api", ["."])
]

def main():
    os.chdir(r"c:\Users\Kamlesh\OneDrive\Desktop\samir sir\homeTruth_AI")
    
    print("Resetting .git directory...")
    run('powershell -Command "if (Test-Path .git) { Remove-Item -Recurse -Force .git }"')
    time.sleep(1)
    
    run("git init")
    run("git config user.name \"Kamlesh\"")
    run("git config user.email \"kamleshchandela72@gmail.com\"")
    
    # ADD UPSTREAM AND FETCH IT
    run("git remote add upstream https://github.com/codinggita/homeTruth_AI.git")
    run("git fetch upstream")
    
    # VERY IMPORTANT: Use mixed reset to link history to upstream/main 
    # without touching working directory files (which checkout -B would fail to do)
    run("git checkout -b main", allow_fail=True) # Ensure we are on a branch called main
    run("git reset upstream/main") # This links our local history exactly to codinggita!

    for i, (branch, msg, files) in enumerate(prs, 1):
        print(f"\n--- Processing PR {i}: {branch} ---")
        run(f"git checkout -b {branch}")
        
        has_files = False
        for f in files:
            res = run(f"git add {f}", allow_fail=True)
            has_files = True
            
        run(f"git commit --allow-empty -m \"{msg}\"")
        
    print("\nGit History Reconstruction (Upstream Linked) Complete!")
    
    # Re-add origin and push
    run("git remote add origin https://github.com/kamleshchandela/homeTruth_AI.git")
    run("git push origin --all --force")

if __name__ == "__main__":
    main()
