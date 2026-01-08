"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = throttle;
async function throttle(tasks, limit) {
    const results = [];
    const executing = [];
    for (const task of tasks) {
        const p = task().then((res) => {
            results.push(res);
        });
        executing.push(p.then(() => { }));
        if (executing.length >= limit) {
            await Promise.race(executing);
        }
    }
    await Promise.all(executing);
    return results;
}
