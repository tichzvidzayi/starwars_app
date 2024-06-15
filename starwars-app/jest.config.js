/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
    // Add more configuration options as needed
};

module.exports = config;