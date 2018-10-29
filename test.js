const assert = require('assert');
const nock = require('nock');
const Hashes = require('jshashes');
const httpHasher = require('./index');

const hasher = require('./hasher');
const test_url = 'https://stuff.com';
const test_resource = '/stuff.js';
const test_content = 'asfa';

describe('hasher', () => {
    it('should generate a sha256 of the file contents', async () => {
        nock(test_url).get(test_resource).reply(200, test_content);
        const expected_hash = new Hashes.SHA256().b64(test_content);
        const res = await hasher(test_url + test_resource);
        assert.equal(expected_hash, res);
    });

    it('should generate a sha512 of the file contents', async () => {

        nock(test_url).get(test_resource).reply(200, test_content);
        const expected_hash = new Hashes.SHA512().b64(test_content);
        const res = await hasher(test_url + test_resource, '512');
        assert.equal(expected_hash, res);
    });
});

describe('hash directives', function () {
    it('should generate sha256 of all valid urls', async function () {

        nock(test_url).get(test_resource).times(15).reply(200, test_content);
        const testDirectives = {
            'directives': {
                'default-src': [
                    'self', test_url + test_resource
                ],
                'media-src': [
                    'self', test_url + test_resource
                ],
                'base-uri': [
                    'self', test_url + test_resource
                ],
                'img-src': [
                    'self', test_url + test_resource
                ],
                'font-src': [
                    'self', test_url + test_resource
                ],
                'connect-src': [
                    'self', test_url + test_resource
                ],
                'object-src': [
                    'self', test_url + test_resource
                ],
                'plugin-types': [
                    test_url + test_resource
                ],
                'child-src': [
                    'self', test_url + test_resource
                ],
                'frame-src': [
                    'self', test_url + test_resource
                ],
                'frame-ancestors': [
                    test_url + test_resource
                ],
                'manifest-src': [
                    'self', test_url + test_resource
                ],
                'worker-src': [
                    test_url + test_resource
                ],
                'script-src': [
                    'self', test_url + test_resource
                ],
                'style-src': [
                    'self', test_url + test_resource
                ]
            }
        };

        const expectedDirectives = {
            'directives': {
                'default-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'media-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'base-uri': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'img-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'font-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'connect-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'object-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'plugin-types': [
                    new Hashes.SHA256().b64(test_content)
                ],
                'child-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'frame-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'frame-ancestors': [
                    new Hashes.SHA256().b64(test_content)
                ],
                'manifest-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'worker-src': [
                    new Hashes.SHA256().b64(test_content)
                ],
                'script-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ],
                'style-src': [
                    'self', new Hashes.SHA256().b64(test_content)
                ]
            }
        };

        const result = await httpHasher(testDirectives);
        assert.deepEqual(result.directives, expectedDirectives.directives);
    });

    it('should generate sha512 of all valid urls', async function () {

        nock(test_url).get(test_resource).times(15).reply(200, test_content);
        const testDirectives = {
            'directives': {
                'default-src': [
                    'self', test_url + test_resource
                ],
                'media-src': [
                    'self', test_url + test_resource
                ],
                'base-uri': [
                    'self', test_url + test_resource
                ],
                'img-src': [
                    'self', test_url + test_resource
                ],
                'font-src': [
                    'self', test_url + test_resource
                ],
                'connect-src': [
                    'self', test_url + test_resource
                ],
                'object-src': [
                    'self', test_url + test_resource
                ],
                'plugin-types': [
                    test_url + test_resource
                ],
                'child-src': [
                    'self', test_url + test_resource
                ],
                'frame-src': [
                    'self', test_url + test_resource
                ],
                'frame-ancestors': [
                    test_url + test_resource
                ],
                'manifest-src': [
                    'self', test_url + test_resource
                ],
                'worker-src': [
                    test_url + test_resource
                ],
                'script-src': [
                    'self', test_url + test_resource
                ],
                'style-src': [
                    'self', test_url + test_resource
                ]
            }
        };

        const expectedDirectives = {
            'directives': {
                'default-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'media-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'base-uri': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'img-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'font-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'connect-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'object-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'plugin-types': [
                    new Hashes.SHA512().b64(test_content)
                ],
                'child-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'frame-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'frame-ancestors': [
                    new Hashes.SHA512().b64(test_content)
                ],
                'manifest-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'worker-src': [
                    new Hashes.SHA512().b64(test_content)
                ],
                'script-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ],
                'style-src': [
                    'self', new Hashes.SHA512().b64(test_content)
                ]
            }
        };

        const result = await httpHasher(testDirectives, '512');
        assert.deepEqual(result.directives, expectedDirectives.directives);
    });

    it('should throw error if directive content is not valid', function (done) {

        const testDirectives = {
            'directives': {
                'default-src': [
                    'asdfasd'
                ]
            }
        };

        httpHasher(testDirectives).catch(() => {
            done();
        });
    });

    it('should throw error if directive name is not valid', function (done) {

        const testDirectives = {
            'directives': {
                'sadfsd-src': [
                    'asdfasd'
                ]
            }
        };

        httpHasher(testDirectives).catch(() => {
            done();
        });
    });
});
