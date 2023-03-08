// https://nodejs.org/api/os.html#os 

const os = require("os");

// The operating system-specific end-of-line marker.
// \n on POSIX
// \r\n on Windows
console.log(os.EOL);

// Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'.
// The return value is equivalent to process.arch.
console.log(os.arch());

// Contains commonly used operating system-specific constants for error codes, process signals, and so on. The specific constants defined are described in OS constants. 
// console.log(os.constants);


// Returns an array of objects containing information about each logical CPU core.
// console.log(os.cpus());

// Returns the amount of free system memory in bytes as an integer.
const freeMemoryInGB = os.freemem();
console.log(`Free Memory in GB is ${freeMemoryInGB / 1024 / 1024 / 1024}`);

const totalMemoryInGB = os.totalmem();
console.log(`Free Memory in GB is ${totalMemoryInGB / 1024 / 1024 / 1024}`);

console.log(os.platform());


// pid < integer > The process ID to retrieve scheduling priority for.Default: 0.
// Returns: <integer>
// Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.
console.log(os.getPriority());

console.log(os.tmpdir());

console.log(os.type());
console.log(os.version());
// console.log(os.constants.errno);

// returns an object containing network interfaces that have been assigned an address
// console.log(os.networkInterfaces());

console.log(os.loadavg());
console.log(os.hostname());


// ENDIANESS 
console.log(os.endianness());
// Return Value: This method returns a string value that specifies the endianness of the CPU. The returned string will be either BE (for big endian) or LE (for little endian).

// LE: It is the most significant bits/values in the sequence that is stored in higher memory address. ( lower endian format )
// BE: It is the most significant bits/values in the sequence that is stored in lower memory address. ( bigger endian format )