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
                     * @property {number|null} [port] Host port
                     * @property {Array.<string>|null} [fetched] Host fetched
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
                        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
                        if (message.fetched != null && message.fetched.length)
                            for (var i = 0; i < message.fetched.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fetched[i]);
                        if (message.addresses != null && message.addresses.length)
                            for (var i = 0; i < message.addresses.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.addresses[i]);
                        if (message.resolved != null && message.resolved.length)
                            for (var i = 0; i < message.resolved.length; ++i)
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.resolved[i]);
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
                                message.port = reader.int32();
                                break;
                            case 3:
                                if (!(message.fetched && message.fetched.length))
                                    message.fetched = [];
                                message.fetched.push(reader.string());
                                break;
                            case 4:
                                if (!(message.addresses && message.addresses.length))
                                    message.addresses = [];
                                message.addresses.push(reader.string());
                                break;
                            case 5:
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
                        if (object.port != null)
                            message.port = object.port | 0;
                        if (object.fetched) {
                            if (!Array.isArray(object.fetched))
                                throw TypeError(".ch.resrc.data.web.Host.fetched: array expected");
                            message.fetched = [];
                            for (var i = 0; i < object.fetched.length; ++i)
                                message.fetched[i] = String(object.fetched[i]);
                        }
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
                            object.port = 0;
                        }
                        if (message.hostname != null && message.hasOwnProperty("hostname"))
                            object.hostname = message.hostname;
                        if (message.port != null && message.hasOwnProperty("port"))
                            object.port = message.port;
                        if (message.fetched && message.fetched.length) {
                            object.fetched = [];
                            for (var j = 0; j < message.fetched.length; ++j)
                                object.fetched[j] = message.fetched[j];
                        }
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
                     * @property {string|null} [path] Path path
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
                     * Path path.
                     * @member {string} path
                     * @memberof ch.resrc.data.web.Path
                     * @instance
                     */
                    Path.prototype.path = "";

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
                        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
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
                                message.path = reader.string();
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
                        if (message.path != null && message.hasOwnProperty("path"))
                            if (!$util.isString(message.path))
                                return "path: string expected";
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
                        if (object.path != null)
                            message.path = String(object.path);
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
                            object.path = "";
                            object.search = "";
                            object.hash = "";
                        }
                        if (message.path != null && message.hasOwnProperty("path"))
                            object.path = message.path;
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

                web.Protocol = (function() {

                    /**
                     * Properties of a Protocol.
                     * @memberof ch.resrc.data.web
                     * @interface IProtocol
                     * @property {string|null} [protocol] Protocol protocol
                     */

                    /**
                     * Constructs a new Protocol.
                     * @memberof ch.resrc.data.web
                     * @classdesc Represents a Protocol.
                     * @implements IProtocol
                     * @constructor
                     * @param {ch.resrc.data.web.IProtocol=} [properties] Properties to set
                     */
                    function Protocol(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Protocol protocol.
                     * @member {string} protocol
                     * @memberof ch.resrc.data.web.Protocol
                     * @instance
                     */
                    Protocol.prototype.protocol = "";

                    /**
                     * Creates a new Protocol instance using the specified properties.
                     * @function create
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {ch.resrc.data.web.IProtocol=} [properties] Properties to set
                     * @returns {ch.resrc.data.web.Protocol} Protocol instance
                     */
                    Protocol.create = function create(properties) {
                        return new Protocol(properties);
                    };

                    /**
                     * Encodes the specified Protocol message. Does not implicitly {@link ch.resrc.data.web.Protocol.verify|verify} messages.
                     * @function encode
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {ch.resrc.data.web.IProtocol} message Protocol message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Protocol.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.protocol);
                        return writer;
                    };

                    /**
                     * Encodes the specified Protocol message, length delimited. Does not implicitly {@link ch.resrc.data.web.Protocol.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {ch.resrc.data.web.IProtocol} message Protocol message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Protocol.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Protocol message from the specified reader or buffer.
                     * @function decode
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ch.resrc.data.web.Protocol} Protocol
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Protocol.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ch.resrc.data.web.Protocol();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.protocol = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Protocol message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ch.resrc.data.web.Protocol} Protocol
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Protocol.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Protocol message.
                     * @function verify
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Protocol.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.protocol != null && message.hasOwnProperty("protocol"))
                            if (!$util.isString(message.protocol))
                                return "protocol: string expected";
                        return null;
                    };

                    /**
                     * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ch.resrc.data.web.Protocol} Protocol
                     */
                    Protocol.fromObject = function fromObject(object) {
                        if (object instanceof $root.ch.resrc.data.web.Protocol)
                            return object;
                        var message = new $root.ch.resrc.data.web.Protocol();
                        if (object.protocol != null)
                            message.protocol = String(object.protocol);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Protocol message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ch.resrc.data.web.Protocol
                     * @static
                     * @param {ch.resrc.data.web.Protocol} message Protocol
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Protocol.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.protocol = "";
                        if (message.protocol != null && message.hasOwnProperty("protocol"))
                            object.protocol = message.protocol;
                        return object;
                    };

                    /**
                     * Converts this Protocol to JSON.
                     * @function toJSON
                     * @memberof ch.resrc.data.web.Protocol
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Protocol.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Protocol;
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
