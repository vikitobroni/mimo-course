const fs = require('fs');

function readStdinUntilNewline() {
  const BUFFER_SIZE = 256;
  let totalBuf = Buffer.alloc(0);

  let fileDescriptor = process.stdin.fd;
  let closeFs = false;

  try {
    fileDescriptor = process.stdin.isTTY ? fs.openSync('/dev/tty', 'rs') : fs.openSync('/dev/stdin', 'rs');
    closeFs = true;
  } catch (e) {}

  while (true) {
    const buffer = Buffer.alloc(BUFFER_SIZE);
    const bytesRead = fs.readSync(fileDescriptor, buffer, 0, BUFFER_SIZE, null);

    if (bytesRead === 0) {
      break;
    }

    totalBuf = Buffer.concat([totalBuf, buffer.subarray(0, bytesRead)]);

    if (buffer.subarray(0, bytesRead).includes('\n')) {
      break;
    }
  }

  if (closeFs) {
    fs.closeSync(fileDescriptor);
  }

  return totalBuf;
}

let stdinBuffer = '';

function input(prompt) {
  if (prompt) {
    process.stdout.write(prompt);
  }

  if (stdinBuffer.length === 0) {
    stdinBuffer = readStdinUntilNewline().toString('utf-8');
  }

  const newline = stdinBuffer.indexOf('\n');
  const line = stdinBuffer.slice(0, newline);

  stdinBuffer = stdinBuffer.slice(newline + 1);
  return line;
}

module.exports = input;
