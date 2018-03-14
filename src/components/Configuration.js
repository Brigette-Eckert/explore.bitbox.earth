import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Configuration extends Component {
  render() {
    return (
      <div className="Configuration">
        <h2 id='config' className="content-head is-center"><i className="fas fa-cog" /> Configuration</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='wallet'><i className="fas fa-folder" /> Wallet</h3>
            <p>Each time you fire up BITBOX it&rsquo;ll generate 10 new $BCH accounts from a randomly generated mnemonic. BITBOX is <a href='https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki'>BIP44 compliant</a>.</p>
            <p>BIP44 compliant wallets have a specific derivation path:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" m / purpose' / coin_type' / account' / change / address_index"}</SyntaxHighlighter>
            <p>BITBOX uses the following derivation path where <code>44&rsquo;</code> is the <code>purpose</code> to show that this wallet is BIP44 compliant. <code>145&rsquo;</code> is the coin code for $BCH. And <code>n&rsquo;</code> is for the index of the respective account. BITBOX creates 10 accounts by default so <code>n</code> is <code>1&ndash;10</code>.</p>
            <SyntaxHighlighter language='text' style={ocean}>{" m / 44' / 145' / n'"}</SyntaxHighlighter>
            <p>It derives the <a href='https://bitcoin.org/en/glossary/extended-key'>xpriv and xpub extended keys</a> for each account.</p>
            <p>BITBOX also generates the private key in <a href='https://bitcoin.org/en/glossary/wallet-import-format'>Wallet Import Format (WIF)</a> and public address in <a href='https://en.bitcoin.it/wiki/Base58Check_encoding'>legacy base58check</a> and <a href='https://www.bitcoinabc.org/cashaddr'>cashaddr</a> encoding for each account&rsquo;s first external change address w/ this derivation path:</p>
            <SyntaxHighlighter language='text' style={ocean}>{" 0 / 0"}</SyntaxHighlighter>
            <h3 id='configuration'><i className="fas fa-cog" /> Configuration</h3>
            <p>You can restart your BITBOX, change how many addresses are generated, increase/decrease the amount of entropy used when generating a mnemonic, use a custom mnemonic/HD path and toggle cashaddr/base58 on the config screen which is available if you click on the cog icon.</p>
            <p>Adding a password let&rsquo;s you explore all 2<sup>512</sup> potential $BCH master seeds.</p>
            <h4 id='entropy'>Autogenerated mnemonic length</h4>
            <p>BITBOX can autogenerate different length mnemonics based on the amount of entropy you select. The more entropy the longer the mnemonic.</p>
            <ul>
              <li>16 bytes / 128 bits === 12 words</li>
              <li>20 bytes / 160 bits === 15 words</li>
              <li>24 bytes / 192 bits === 18 words</li>
              <li>28 bytes / 224 bits === 21 words</li>
              <li>32 bytes / 256 bits === 24 words</li>
            </ul>
            <img src='/assets/screenshot8.png' />
          </div>
        </div>
      </div>
    );
  }
}

export default Configuration;
