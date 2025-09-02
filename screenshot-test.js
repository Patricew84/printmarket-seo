const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport for desktop
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Navigate to the optimized page
  await page.goto('http://localhost:3000/optimized');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Capture full page screenshot
  await page.screenshot({ 
    path: 'optimized-page-full.png',
    fullPage: true 
  });
  
  // Capture hero section
  await page.screenshot({ 
    path: 'hero-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 800 }
  });
  
  // Capture services section
  await page.screenshot({ 
    path: 'services-section.png',
    clip: { x: 0, y: 1200, width: 1920, height: 600 }
  });
  
  // Capture testimonials section
  await page.screenshot({ 
    path: 'testimonials-section.png',
    clip: { x: 0, y: 2400, width: 1920, height: 500 }
  });
  
  console.log('Screenshots captured successfully!');
  
  await browser.close();
}

captureScreenshots().catch(console.error);

