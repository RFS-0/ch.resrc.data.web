/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ch = (function() {

    /**
     * Namespace ch.
     * @exports ch
     * @namespace
     */
    var ch = {};

    ch.resrc = (function() {

        /**
         * Namespace resrc.
         * @memberof ch
         * @namespace
         */
        var resrc = {};

        resrc.data = (function() {

            /**
             * Namespace data.
             * @memberof ch.resrc
             * @namespace
             */
            var data = {};

            data.web = (function() {

                /**
                 * Namespace web.
                 * @memberof ch.resrc.data
                 * @namespace
                 */
                var web = {};

                web.Host = (function() {

                    /**
                     * Properties of a Host.
                     * @memberof ch.resrc.data.web
                     * @interface IHost
                     * @property {string|null} [hostname] Host hostname
                     * @property {string|null} [topLevelDomain] Host topLevelDomain
                     * @property {number|null} [port] Host port
                     * @property {Array.<string>|null} [fetched] Host fetched
                     * @property {boolean|null} [fetchFailed] Host fetchFailed
                     * @property {Array.<string>|null} [addresses] Host addresses
                     * @property {Array.<string>|null} [resolved] Host resolved
                     */

                    /**
                     * Constructs a new Host.
                     * @memberof ch.resrc.data.web
                     * @classdesc Represents a Host.
                     * @implements IHost
                     * @constructor
                     * @param {ch.resrc.data.web.IHost=} [properties] Properties to set
                     */
                    function Host(properties) {
                        this.fetched = [];
                        this.addresses = [];
                        this.resolved = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Host hostname.
                     * @member {string} hostname
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     */
                    Host.prototype.hostname = "";

                    /**
                     * Host topLevelDomain.
                     * @member {string} topLevelDomain
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     */
                    Host.prototype.topLevelDomain = "";

                    /**
                     * Host port.
                     * @member {number} port
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     */
                    Host.prototype.port = 0;

                    /**
                     * Host fetched.
                     * @member {Array.<string>} fetched
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     */
                    Host.prototype.fetched = $util.emptyArray;

                    /**
                     * Host fetchFailed.
                     * @member {boolean} fetchFailed
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     */
                    Host.prototype.fetchFailed = false;

                    /**
                     * Host addresses.
                     * @member {Array.<string>} addresses
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     */
                    Host.prototype.addresses = $util.emptyArray;

                    /**
                     * Host resolved.
                     * @member {Array.<string>} resolved
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     */
                    Host.prototype.resolved = $util.emptyArray;

                    /**
                     * Creates a new Host instance using the specified properties.
                     * @function create
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {ch.resrc.data.web.IHost=} [properties] Properties to set
                     * @returns {ch.resrc.data.web.Host} Host instance
                     */
                    Host.create = function create(properties) {
                        return new Host(properties);
                    };

                    /**
                     * Encodes the specified Host message. Does not implicitly {@link ch.resrc.data.web.Host.verify|verify} messages.
                     * @function encode
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {ch.resrc.data.web.IHost} message Host message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Host.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostname);
                        if (message.topLevelDomain != null && Object.hasOwnProperty.call(message, "topLevelDomain"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.topLevelDomain);
                        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
                        if (message.fetched != null && message.fetched.length)
                            for (var i = 0; i < message.fetched.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fetched[i]);
                        if (message.fetchFailed != null && Object.hasOwnProperty.call(message, "fetchFailed"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.fetchFailed);
                        if (message.addresses != null && message.addresses.length)
                            for (var i = 0; i < message.addresses.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.addresses[i]);
                        if (message.resolved != null && message.resolved.length)
                            for (var i = 0; i < message.resolved.length; ++i)
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.resolved[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified Host message, length delimited. Does not implicitly {@link ch.resrc.data.web.Host.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {ch.resrc.data.web.IHost} message Host message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Host.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Host message from the specified reader or buffer.
                     * @function decode
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ch.resrc.data.web.Host} Host
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Host.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ch.resrc.data.web.Host();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hostname = reader.string();
                                break;
                            case 2:
                                message.topLevelDomain = reader.string();
                                break;
                            case 3:
                                message.port = reader.int32();
                                break;
                            case 4:
                                if (!(message.fetched && message.fetched.length))
                                    message.fetched = [];
                                message.fetched.push(reader.string());
                                break;
                            case 5:
                                message.fetchFailed = reader.bool();
                                break;
                            case 6:
                                if (!(message.addresses && message.addresses.length))
                                    message.addresses = [];
                                message.addresses.push(reader.string());
                                break;
                            case 7:
                                if (!(message.resolved && message.resolved.length))
                                    message.resolved = [];
                                message.resolved.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Host message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ch.resrc.data.web.Host} Host
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Host.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Host message.
                     * @function verify
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Host.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hostname != null && message.hasOwnProperty("hostname"))
                            if (!$util.isString(message.hostname))
                                return "hostname: string expected";
                        if (message.topLevelDomain != null && message.hasOwnProperty("topLevelDomain"))
                            if (!$util.isString(message.topLevelDomain))
                                return "topLevelDomain: string expected";
                        if (message.port != null && message.hasOwnProperty("port"))
                            if (!$util.isInteger(message.port))
                                return "port: integer expected";
                        if (message.fetched != null && message.hasOwnProperty("fetched")) {
                            if (!Array.isArray(message.fetched))
                                return "fetched: array expected";
                            for (var i = 0; i < message.fetched.length; ++i)
                                if (!$util.isString(message.fetched[i]))
                                    return "fetched: string[] expected";
                        }
                        if (message.fetchFailed != null && message.hasOwnProperty("fetchFailed"))
                            if (typeof message.fetchFailed !== "boolean")
                                return "fetchFailed: boolean expected";
                        if (message.addresses != null && message.hasOwnProperty("addresses")) {
                            if (!Array.isArray(message.addresses))
                                return "addresses: array expected";
                            for (var i = 0; i < message.addresses.length; ++i)
                                if (!$util.isString(message.addresses[i]))
                                    return "addresses: string[] expected";
                        }
                        if (message.resolved != null && message.hasOwnProperty("resolved")) {
                            if (!Array.isArray(message.resolved))
                                return "resolved: array expected";
                            for (var i = 0; i < message.resolved.length; ++i)
                                if (!$util.isString(message.resolved[i]))
                                    return "resolved: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Host message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ch.resrc.data.web.Host} Host
                     */
                    Host.fromObject = function fromObject(object) {
                        if (object instanceof $root.ch.resrc.data.web.Host)
                            return object;
                        var message = new $root.ch.resrc.data.web.Host();
                        if (object.hostname != null)
                            message.hostname = String(object.hostname);
                        if (object.topLevelDomain != null)
                            message.topLevelDomain = String(object.topLevelDomain);
                        if (object.port != null)
                            message.port = object.port | 0;
                        if (object.fetched) {
                            if (!Array.isArray(object.fetched))
                                throw TypeError(".ch.resrc.data.web.Host.fetched: array expected");
                            message.fetched = [];
                            for (var i = 0; i < object.fetched.length; ++i)
                                message.fetched[i] = String(object.fetched[i]);
                        }
                        if (object.fetchFailed != null)
                            message.fetchFailed = Boolean(object.fetchFailed);
                        if (object.addresses) {
                            if (!Array.isArray(object.addresses))
                                throw TypeError(".ch.resrc.data.web.Host.addresses: array expected");
                            message.addresses = [];
                            for (var i = 0; i < object.addresses.length; ++i)
                                message.addresses[i] = String(object.addresses[i]);
                        }
                        if (object.resolved) {
                            if (!Array.isArray(object.resolved))
                                throw TypeError(".ch.resrc.data.web.Host.resolved: array expected");
                            message.resolved = [];
                            for (var i = 0; i < object.resolved.length; ++i)
                                message.resolved[i] = String(object.resolved[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Host message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ch.resrc.data.web.Host
                     * @static
                     * @param {ch.resrc.data.web.Host} message Host
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Host.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.fetched = [];
                            object.addresses = [];
                            object.resolved = [];
                        }
                        if (options.defaults) {
                            object.hostname = "";
                            object.topLevelDomain = "";
                            object.port = 0;
                            object.fetchFailed = false;
                        }
                        if (message.hostname != null && message.hasOwnProperty("hostname"))
                            object.hostname = message.hostname;
                        if (message.topLevelDomain != null && message.hasOwnProperty("topLevelDomain"))
                            object.topLevelDomain = message.topLevelDomain;
                        if (message.port != null && message.hasOwnProperty("port"))
                            object.port = message.port;
                        if (message.fetched && message.fetched.length) {
                            object.fetched = [];
                            for (var j = 0; j < message.fetched.length; ++j)
                                object.fetched[j] = message.fetched[j];
                        }
                        if (message.fetchFailed != null && message.hasOwnProperty("fetchFailed"))
                            object.fetchFailed = message.fetchFailed;
                        if (message.addresses && message.addresses.length) {
                            object.addresses = [];
                            for (var j = 0; j < message.addresses.length; ++j)
                                object.addresses[j] = message.addresses[j];
                        }
                        if (message.resolved && message.resolved.length) {
                            object.resolved = [];
                            for (var j = 0; j < message.resolved.length; ++j)
                                object.resolved[j] = message.resolved[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Host to JSON.
                     * @function toJSON
                     * @memberof ch.resrc.data.web.Host
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Host.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Host;
                })();

                web.Path = (function() {

                    /**
                     * Properties of a Path.
                     * @memberof ch.resrc.data.web
                     * @interface IPath
                     * @property {string|null} [pathname] Path pathname
                     * @property {string|null} [search] Path search
                     * @property {string|null} [hash] Path hash
                     */

                    /**
                     * Constructs a new Path.
                     * @memberof ch.resrc.data.web
                     * @classdesc Represents a Path.
                     * @implements IPath
                     * @constructor
                     * @param {ch.resrc.data.web.IPath=} [properties] Properties to set
                     */
                    function Path(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Path pathname.
                     * @member {string} pathname
                     * @memberof ch.resrc.data.web.Path
                     * @instance
                     */
                    Path.prototype.pathname = "";

                    /**
                     * Path search.
                     * @member {string} search
                     * @memberof ch.resrc.data.web.Path
                     * @instance
                     */
                    Path.prototype.search = "";

                    /**
                     * Path hash.
                     * @member {string} hash
                     * @memberof ch.resrc.data.web.Path
                     * @instance
                     */
                    Path.prototype.hash = "";

                    /**
                     * Creates a new Path instance using the specified properties.
                     * @function create
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {ch.resrc.data.web.IPath=} [properties] Properties to set
                     * @returns {ch.resrc.data.web.Path} Path instance
                     */
                    Path.create = function create(properties) {
                        return new Path(properties);
                    };

                    /**
                     * Encodes the specified Path message. Does not implicitly {@link ch.resrc.data.web.Path.verify|verify} messages.
                     * @function encode
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {ch.resrc.data.web.IPath} message Path message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Path.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.pathname != null && Object.hasOwnProperty.call(message, "pathname"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.pathname);
                        if (message.search != null && Object.hasOwnProperty.call(message, "search"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.search);
                        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.hash);
                        return writer;
                    };

                    /**
                     * Encodes the specified Path message, length delimited. Does not implicitly {@link ch.resrc.data.web.Path.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {ch.resrc.data.web.IPath} message Path message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Path.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Path message from the specified reader or buffer.
                     * @function decode
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ch.resrc.data.web.Path} Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Path.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ch.resrc.data.web.Path();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.pathname = reader.string();
                                break;
                            case 2:
                                message.search = reader.string();
                                break;
                            case 3:
                                message.hash = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Path message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ch.resrc.data.web.Path} Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Path.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Path message.
                     * @function verify
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Path.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.pathname != null && message.hasOwnProperty("pathname"))
                            if (!$util.isString(message.pathname))
                                return "pathname: string expected";
                        if (message.search != null && message.hasOwnProperty("search"))
                            if (!$util.isString(message.search))
                                return "search: string expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!$util.isString(message.hash))
                                return "hash: string expected";
                        return null;
                    };

                    /**
                     * Creates a Path message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ch.resrc.data.web.Path} Path
                     */
                    Path.fromObject = function fromObject(object) {
                        if (object instanceof $root.ch.resrc.data.web.Path)
                            return object;
                        var message = new $root.ch.resrc.data.web.Path();
                        if (object.pathname != null)
                            message.pathname = String(object.pathname);
                        if (object.search != null)
                            message.search = String(object.search);
                        if (object.hash != null)
                            message.hash = String(object.hash);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Path message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ch.resrc.data.web.Path
                     * @static
                     * @param {ch.resrc.data.web.Path} message Path
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Path.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.pathname = "";
                            object.search = "";
                            object.hash = "";
                        }
                        if (message.pathname != null && message.hasOwnProperty("pathname"))
                            object.pathname = message.pathname;
                        if (message.search != null && message.hasOwnProperty("search"))
                            object.search = message.search;
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = message.hash;
                        return object;
                    };

                    /**
                     * Converts this Path to JSON.
                     * @function toJSON
                     * @memberof ch.resrc.data.web.Path
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Path.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Path;
                })();

                web.Auth = (function() {

                    /**
                     * Properties of an Auth.
                     * @memberof ch.resrc.data.web
                     * @interface IAuth
                     * @property {string|null} [username] Auth username
                     * @property {string|null} [password] Auth password
                     */

                    /**
                     * Constructs a new Auth.
                     * @memberof ch.resrc.data.web
                     * @classdesc Represents an Auth.
                     * @implements IAuth
                     * @constructor
                     * @param {ch.resrc.data.web.IAuth=} [properties] Properties to set
                     */
                    function Auth(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Auth username.
                     * @member {string} username
                     * @memberof ch.resrc.data.web.Auth
                     * @instance
                     */
                    Auth.prototype.username = "";

                    /**
                     * Auth password.
                     * @member {string} password
                     * @memberof ch.resrc.data.web.Auth
                     * @instance
                     */
                    Auth.prototype.password = "";

                    /**
                     * Creates a new Auth instance using the specified properties.
                     * @function create
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {ch.resrc.data.web.IAuth=} [properties] Properties to set
                     * @returns {ch.resrc.data.web.Auth} Auth instance
                     */
                    Auth.create = function create(properties) {
                        return new Auth(properties);
                    };

                    /**
                     * Encodes the specified Auth message. Does not implicitly {@link ch.resrc.data.web.Auth.verify|verify} messages.
                     * @function encode
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {ch.resrc.data.web.IAuth} message Auth message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Auth.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                        return writer;
                    };

                    /**
                     * Encodes the specified Auth message, length delimited. Does not implicitly {@link ch.resrc.data.web.Auth.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {ch.resrc.data.web.IAuth} message Auth message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Auth.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Auth message from the specified reader or buffer.
                     * @function decode
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ch.resrc.data.web.Auth} Auth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Auth.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ch.resrc.data.web.Auth();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.username = reader.string();
                                break;
                            case 2:
                                message.password = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Auth message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ch.resrc.data.web.Auth} Auth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Auth.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Auth message.
                     * @function verify
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Auth.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.username != null && message.hasOwnProperty("username"))
                            if (!$util.isString(message.username))
                                return "username: string expected";
                        if (message.password != null && message.hasOwnProperty("password"))
                            if (!$util.isString(message.password))
                                return "password: string expected";
                        return null;
                    };

                    /**
                     * Creates an Auth message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ch.resrc.data.web.Auth} Auth
                     */
                    Auth.fromObject = function fromObject(object) {
                        if (object instanceof $root.ch.resrc.data.web.Auth)
                            return object;
                        var message = new $root.ch.resrc.data.web.Auth();
                        if (object.username != null)
                            message.username = String(object.username);
                        if (object.password != null)
                            message.password = String(object.password);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Auth message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ch.resrc.data.web.Auth
                     * @static
                     * @param {ch.resrc.data.web.Auth} message Auth
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Auth.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.username = "";
                            object.password = "";
                        }
                        if (message.username != null && message.hasOwnProperty("username"))
                            object.username = message.username;
                        if (message.password != null && message.hasOwnProperty("password"))
                            object.password = message.password;
                        return object;
                    };

                    /**
                     * Converts this Auth to JSON.
                     * @function toJSON
                     * @memberof ch.resrc.data.web.Auth
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Auth.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Auth;
                })();

                web.Script = (function() {

                    /**
                     * Properties of a Script.
                     * @memberof ch.resrc.data.web
                     * @interface IScript
                     * @property {string|null} [script] Script script
                     */

                    /**
                     * Constructs a new Script.
                     * @memberof ch.resrc.data.web
                     * @classdesc Represents a Script.
                     * @implements IScript
                     * @constructor
                     * @param {ch.resrc.data.web.IScript=} [properties] Properties to set
                     */
                    function Script(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Script script.
                     * @member {string} script
                     * @memberof ch.resrc.data.web.Script
                     * @instance
                     */
                    Script.prototype.script = "";

                    /**
                     * Creates a new Script instance using the specified properties.
                     * @function create
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {ch.resrc.data.web.IScript=} [properties] Properties to set
                     * @returns {ch.resrc.data.web.Script} Script instance
                     */
                    Script.create = function create(properties) {
                        return new Script(properties);
                    };

                    /**
                     * Encodes the specified Script message. Does not implicitly {@link ch.resrc.data.web.Script.verify|verify} messages.
                     * @function encode
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {ch.resrc.data.web.IScript} message Script message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Script.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.script != null && Object.hasOwnProperty.call(message, "script"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.script);
                        return writer;
                    };

                    /**
                     * Encodes the specified Script message, length delimited. Does not implicitly {@link ch.resrc.data.web.Script.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {ch.resrc.data.web.IScript} message Script message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Script.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Script message from the specified reader or buffer.
                     * @function decode
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ch.resrc.data.web.Script} Script
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Script.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ch.resrc.data.web.Script();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.script = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Script message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ch.resrc.data.web.Script} Script
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Script.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Script message.
                     * @function verify
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Script.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.script != null && message.hasOwnProperty("script"))
                            if (!$util.isString(message.script))
                                return "script: string expected";
                        return null;
                    };

                    /**
                     * Creates a Script message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ch.resrc.data.web.Script} Script
                     */
                    Script.fromObject = function fromObject(object) {
                        if (object instanceof $root.ch.resrc.data.web.Script)
                            return object;
                        var message = new $root.ch.resrc.data.web.Script();
                        if (object.script != null)
                            message.script = String(object.script);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Script message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ch.resrc.data.web.Script
                     * @static
                     * @param {ch.resrc.data.web.Script} message Script
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Script.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.script = "";
                        if (message.script != null && message.hasOwnProperty("script"))
                            object.script = message.script;
                        return object;
                    };

                    /**
                     * Converts this Script to JSON.
                     * @function toJSON
                     * @memberof ch.resrc.data.web.Script
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Script.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Script;
                })();

                web.FetchResult = (function() {

                    /**
                     * Properties of a FetchResult.
                     * @memberof ch.resrc.data.web
                     * @interface IFetchResult
                     * @property {string|null} [fetchedHost] FetchResult fetchedHost
                     * @property {Array.<string>|null} [hostnames] FetchResult hostnames
                     * @property {Array.<ch.resrc.data.web.IPath>|null} [paths] FetchResult paths
                     * @property {Array.<ch.resrc.data.web.IScript>|null} [scripts] FetchResult scripts
                     * @property {boolean|null} [error] FetchResult error
                     */

                    /**
                     * Constructs a new FetchResult.
                     * @memberof ch.resrc.data.web
                     * @classdesc Represents a FetchResult.
                     * @implements IFetchResult
                     * @constructor
                     * @param {ch.resrc.data.web.IFetchResult=} [properties] Properties to set
                     */
                    function FetchResult(properties) {
                        this.hostnames = [];
                        this.paths = [];
                        this.scripts = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FetchResult fetchedHost.
                     * @member {string} fetchedHost
                     * @memberof ch.resrc.data.web.FetchResult
                     * @instance
                     */
                    FetchResult.prototype.fetchedHost = "";

                    /**
                     * FetchResult hostnames.
                     * @member {Array.<string>} hostnames
                     * @memberof ch.resrc.data.web.FetchResult
                     * @instance
                     */
                    FetchResult.prototype.hostnames = $util.emptyArray;

                    /**
                     * FetchResult paths.
                     * @member {Array.<ch.resrc.data.web.IPath>} paths
                     * @memberof ch.resrc.data.web.FetchResult
                     * @instance
                     */
                    FetchResult.prototype.paths = $util.emptyArray;

                    /**
                     * FetchResult scripts.
                     * @member {Array.<ch.resrc.data.web.IScript>} scripts
                     * @memberof ch.resrc.data.web.FetchResult
                     * @instance
                     */
                    FetchResult.prototype.scripts = $util.emptyArray;

                    /**
                     * FetchResult error.
                     * @member {boolean} error
                     * @memberof ch.resrc.data.web.FetchResult
                     * @instance
                     */
                    FetchResult.prototype.error = false;

                    /**
                     * Creates a new FetchResult instance using the specified properties.
                     * @function create
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {ch.resrc.data.web.IFetchResult=} [properties] Properties to set
                     * @returns {ch.resrc.data.web.FetchResult} FetchResult instance
                     */
                    FetchResult.create = function create(properties) {
                        return new FetchResult(properties);
                    };

                    /**
                     * Encodes the specified FetchResult message. Does not implicitly {@link ch.resrc.data.web.FetchResult.verify|verify} messages.
                     * @function encode
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {ch.resrc.data.web.IFetchResult} message FetchResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FetchResult.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.fetchedHost != null && Object.hasOwnProperty.call(message, "fetchedHost"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fetchedHost);
                        if (message.hostnames != null && message.hostnames.length)
                            for (var i = 0; i < message.hostnames.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.hostnames[i]);
                        if (message.paths != null && message.paths.length)
                            for (var i = 0; i < message.paths.length; ++i)
                                $root.ch.resrc.data.web.Path.encode(message.paths[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.scripts != null && message.scripts.length)
                            for (var i = 0; i < message.scripts.length; ++i)
                                $root.ch.resrc.data.web.Script.encode(message.scripts[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.error);
                        return writer;
                    };

                    /**
                     * Encodes the specified FetchResult message, length delimited. Does not implicitly {@link ch.resrc.data.web.FetchResult.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {ch.resrc.data.web.IFetchResult} message FetchResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FetchResult.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FetchResult message from the specified reader or buffer.
                     * @function decode
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ch.resrc.data.web.FetchResult} FetchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FetchResult.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ch.resrc.data.web.FetchResult();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.fetchedHost = reader.string();
                                break;
                            case 2:
                                if (!(message.hostnames && message.hostnames.length))
                                    message.hostnames = [];
                                message.hostnames.push(reader.string());
                                break;
                            case 3:
                                if (!(message.paths && message.paths.length))
                                    message.paths = [];
                                message.paths.push($root.ch.resrc.data.web.Path.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                if (!(message.scripts && message.scripts.length))
                                    message.scripts = [];
                                message.scripts.push($root.ch.resrc.data.web.Script.decode(reader, reader.uint32()));
                                break;
                            case 7:
                                message.error = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FetchResult message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ch.resrc.data.web.FetchResult} FetchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FetchResult.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FetchResult message.
                     * @function verify
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FetchResult.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.fetchedHost != null && message.hasOwnProperty("fetchedHost"))
                            if (!$util.isString(message.fetchedHost))
                                return "fetchedHost: string expected";
                        if (message.hostnames != null && message.hasOwnProperty("hostnames")) {
                            if (!Array.isArray(message.hostnames))
                                return "hostnames: array expected";
                            for (var i = 0; i < message.hostnames.length; ++i)
                                if (!$util.isString(message.hostnames[i]))
                                    return "hostnames: string[] expected";
                        }
                        if (message.paths != null && message.hasOwnProperty("paths")) {
                            if (!Array.isArray(message.paths))
                                return "paths: array expected";
                            for (var i = 0; i < message.paths.length; ++i) {
                                var error = $root.ch.resrc.data.web.Path.verify(message.paths[i]);
                                if (error)
                                    return "paths." + error;
                            }
                        }
                        if (message.scripts != null && message.hasOwnProperty("scripts")) {
                            if (!Array.isArray(message.scripts))
                                return "scripts: array expected";
                            for (var i = 0; i < message.scripts.length; ++i) {
                                var error = $root.ch.resrc.data.web.Script.verify(message.scripts[i]);
                                if (error)
                                    return "scripts." + error;
                            }
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            if (typeof message.error !== "boolean")
                                return "error: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a FetchResult message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ch.resrc.data.web.FetchResult} FetchResult
                     */
                    FetchResult.fromObject = function fromObject(object) {
                        if (object instanceof $root.ch.resrc.data.web.FetchResult)
                            return object;
                        var message = new $root.ch.resrc.data.web.FetchResult();
                        if (object.fetchedHost != null)
                            message.fetchedHost = String(object.fetchedHost);
                        if (object.hostnames) {
                            if (!Array.isArray(object.hostnames))
                                throw TypeError(".ch.resrc.data.web.FetchResult.hostnames: array expected");
                            message.hostnames = [];
                            for (var i = 0; i < object.hostnames.length; ++i)
                                message.hostnames[i] = String(object.hostnames[i]);
                        }
                        if (object.paths) {
                            if (!Array.isArray(object.paths))
                                throw TypeError(".ch.resrc.data.web.FetchResult.paths: array expected");
                            message.paths = [];
                            for (var i = 0; i < object.paths.length; ++i) {
                                if (typeof object.paths[i] !== "object")
                                    throw TypeError(".ch.resrc.data.web.FetchResult.paths: object expected");
                                message.paths[i] = $root.ch.resrc.data.web.Path.fromObject(object.paths[i]);
                            }
                        }
                        if (object.scripts) {
                            if (!Array.isArray(object.scripts))
                                throw TypeError(".ch.resrc.data.web.FetchResult.scripts: array expected");
                            message.scripts = [];
                            for (var i = 0; i < object.scripts.length; ++i) {
                                if (typeof object.scripts[i] !== "object")
                                    throw TypeError(".ch.resrc.data.web.FetchResult.scripts: object expected");
                                message.scripts[i] = $root.ch.resrc.data.web.Script.fromObject(object.scripts[i]);
                            }
                        }
                        if (object.error != null)
                            message.error = Boolean(object.error);
                        return message;
                    };

                    /**
                     * Creates a plain object from a FetchResult message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ch.resrc.data.web.FetchResult
                     * @static
                     * @param {ch.resrc.data.web.FetchResult} message FetchResult
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FetchResult.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.hostnames = [];
                            object.paths = [];
                            object.scripts = [];
                        }
                        if (options.defaults) {
                            object.fetchedHost = "";
                            object.error = false;
                        }
                        if (message.fetchedHost != null && message.hasOwnProperty("fetchedHost"))
                            object.fetchedHost = message.fetchedHost;
                        if (message.hostnames && message.hostnames.length) {
                            object.hostnames = [];
                            for (var j = 0; j < message.hostnames.length; ++j)
                                object.hostnames[j] = message.hostnames[j];
                        }
                        if (message.paths && message.paths.length) {
                            object.paths = [];
                            for (var j = 0; j < message.paths.length; ++j)
                                object.paths[j] = $root.ch.resrc.data.web.Path.toObject(message.paths[j], options);
                        }
                        if (message.scripts && message.scripts.length) {
                            object.scripts = [];
                            for (var j = 0; j < message.scripts.length; ++j)
                                object.scripts[j] = $root.ch.resrc.data.web.Script.toObject(message.scripts[j], options);
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = message.error;
                        return object;
                    };

                    /**
                     * Converts this FetchResult to JSON.
                     * @function toJSON
                     * @memberof ch.resrc.data.web.FetchResult
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FetchResult.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FetchResult;
                })();

                return web;
            })();

            return data;
        })();

        return resrc;
    })();

    return ch;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
