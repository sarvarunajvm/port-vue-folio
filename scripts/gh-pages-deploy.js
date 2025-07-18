/* eslint-disable no-console */
const fs = require("fs");

(async () => {
  try {
    // Import execa dynamically since it's now an ES module
    const { execa } = await import("execa");
    
    console.log("🚀 Starting GitHub Pages deployment...");
    
    // Check if working directory is clean
    const { stdout: status } = await execa("git", ["status", "--porcelain"]);
    if (status) {
      console.log("⚠️  Warning: Working directory is not clean. Uncommitted changes may be lost.");
      console.log("Continuing in 3 seconds...");
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Create orphan gh-pages branch
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("📦 Building started...");
    
    // Build the project
    await execa("npm", ["run", "build"]);
    console.log("✅ Build completed successfully");
    
    // Determine build folder name
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    console.log(`📁 Using build folder: ${folderName}`);
    
    // Add all files from build folder
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    
    // Commit the build
    await execa("git", ["--work-tree", folderName, "commit", "-m", "🚀 Deploy to GitHub Pages with liquid glass theme"]);
    
    console.log("📤 Pushing to gh-pages...");
    
    // Push to gh-pages branch
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    
    // Clean up
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    
    console.log("🎉 Successfully deployed to GitHub Pages!");
    console.log("🔗 Check your repository settings to enable GitHub Pages");
    console.log("💡 Your site should be available at: https://sarvarunajvm.github.io/port-vue-folio/");
    
  } catch (e) {
    console.error("❌ Deployment failed:");
    console.error(e.message);
    
    // Try to recover by switching back to master
    try {
      const { execa } = await import("execa");
      await execa("git", ["checkout", "-f", "master"]);
      await execa("git", ["branch", "-D", "gh-pages"]).catch(() => {
        // Ignore error if branch doesn't exist
      });
      console.log("🔄 Recovered to master branch");
    } catch (recoveryError) {
      console.error("⚠️  Could not recover to master branch. Manual cleanup may be required.");
    }
    
    process.exit(1);
  }
})();
