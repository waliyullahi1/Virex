export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    console.log(config.FLUTTERWAVE_PRIVATECODE);
    
    return { privateKey: config.FLUTTERWAVE_PRIVATECODE }; 
  });