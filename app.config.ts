export default defineAppConfig({
    ui: {
      notifications: {
        position: "top-0 bottom-[unset]", // Move notifications to the top right
      },
      head: {
        link: [
          { rel: 'icon', type: 'image/png', href: '/logo.png' }
        ]
      }
    },
  });
  