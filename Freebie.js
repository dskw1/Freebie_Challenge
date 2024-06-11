let total = 0;

function add(n = 1) {
    total += n;
    return (m) => add(m);
}
