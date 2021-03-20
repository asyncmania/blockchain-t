import * as crypto from "crypto";

class Block {
  readonly hash: string;

  constructor(
    readonly index: number,
    readonly previousHash: string,
    readonly timestamp: number,
    readonly data: string
  ) {
    this.hash = this.calculateHash();
  }

  private calculateHash(): string {
    const data = `${this.index}${this.previousHash}${this.timestamp}${this.data}`;
    return crypto.createHash("256").update(data).digest("hex");
  }

}
