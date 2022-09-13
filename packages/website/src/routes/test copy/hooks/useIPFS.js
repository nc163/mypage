import semaphore from "semaphore";
import { create } from "ipfs-core";
import { useEffect, useState, useRef } from "react";

/**
 * state-machine
 * 0. not started
 * 1. ipfs is not ready
 * 2. ipfs is ready
 */
const useIPFS = () => {
  const [ready, setState] = useState(0);
  const [error, setErrors] = useState(null);

  const create = () => {
    semaphore.take(function () {
      console.log(globalThis.ipfs);
      if (globalThis.ipfs) return null;
      semaphore.leave();
    });
  };

  return [create, { ready, error }];
};
