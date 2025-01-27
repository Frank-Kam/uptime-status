const pageConfig = {
  // Title for your status page
  title: "Frank - Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
   
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    {
      id: 'blog',
      name: 'Blog',
      method: 'GET',
      target: 'https://frankk.uk/robots.txt',
      tooltip: 'My Blog',
      statusPageLink: 'https://frankk.uk/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {  
      id: 'dypc',
      name: 'DYPC CTFd',
      method: 'GET',
      target: 'https://ctf.dypc.cc/robots.txt',
      tooltip: 'CTFd of My School Club',
      statusPageLink: 'https://ctf.dypc.cc/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'dysh',
      name: 'DYISH Home Page',
      method: 'GET',
      target: 'https://www.dysh.tyc.edu.tw/robots.txt',
      tooltip: 'Home Page of My School',
      statusPageLink: 'https://www.dysh.tyc.edu.tw',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {  
      id: 'dysh1',
      name: 'DYISH System',
      method: 'GET',
      target: 'https://score.dysh.tyc.edu.tw/index.html',
      tooltip: 'A Score System of My School',
      statusPageLink: 'https://score.dysh.tyc.edu.tw/sCH_UI/Login.aspx',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Taipei",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
