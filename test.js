const assert = require('assert');
const nock = require('nock');
const httpHasher = require('index.js');

const hasher = require('hasher');

describe('hasher', () => {
    it('should generate a sha256 of the file contents', () => {
        const test_url = 'https://stuff.com/jkdlsj.js';
        const test_content = 'asfa';
        nock(test_url).get('/').reply(200, test_content);
        const expected_hash = new Hashes.SHA256().b64(test_content);
        hasher(test_url).then((res) => {
            assert.equal(expected_hash, res);
        });
    });

    it('should generate a sha512 of the file contents', () => {
        const test_url = 'https://stuff.com/jkdlsj.js';
        const test_content = 'asfa';
        nock(test_url).get('/').reply(200, test_content);
        const expected_hash = new Hashes.SHA512().b64(test_content);
        hasher(test_url).then((res) => {
            assert.equal(expected_hash, res);
        });
    });

    it('should match hash results in chrome', async () => {

    });

    it('should match hash results in FireFox', async () => {

    });

    it('should error out if any url does not resolve to valid pages', () => {

    });
});

describe('hash directives', () => {
    it('should generate sha256 of all valid urls', () => {
        httpHasher()
    });

    it('should generate sha512 of all valid urls', () => {

    });

    it('should generate csp complex only if directives are valid', () => {

    });



});
