let total = 0;

/**
 *Adds the given number to the total and allows chaining.
 * @param {number} [n=1] - The number to add to the total. Defaults to 1 if not provided.
 * @returns {function} - Returns a function that can be called with another number to continue the chain.
 */

function add(n = 1) {
    total += n;
    return (m) => add(m);
}
