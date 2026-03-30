// tokenCalculator.js utility for token cost calculations in the SCI BASE Learning Platform

/**
 * Calculate token cost based on video duration in minutes.
 * @param {number} duration - Video duration in minutes.
 * @returns {number} - Calculated token cost.
 */
function calculateTokenCost(duration) {
    if (duration <= 0) return 0;
    const cost = duration * 0.5;
    return cost < 1 ? 1 : cost;
}

/**
 * Convert KES to Tokens. 1 Token = 1 KES.
 * @param {number} kes - Amount of KES.
 * @returns {number} - Equivalent tokens.
 */
function kesToTokens(kes) {
    return kes;
}

/**
 * Convert Tokens to KES. 1 Token = 1 KES.
 * @param {number} tokens - Amount of tokens.
 * @returns {number} - Equivalent KES.
 */
function tokensToKes(tokens) {
    return tokens;
}

/**
 * Validate top-up amount for KES. Minimum amount is 7 KES.
 * @param {number} amount - Amount to be validated.
 * @returns {boolean} - True if valid, false otherwise.
 */
function isValidTopupAmount(amount) {
    return amount >= 7;
}

module.exports = { calculateTokenCost, kesToTokens, tokensToKes, isValidTopupAmount };