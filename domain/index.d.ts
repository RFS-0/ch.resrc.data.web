import * as $protobuf from "protobufjs";
/** Namespace ch. */
export namespace ch {

    /** Namespace resrc. */
    namespace resrc {

        /** Namespace data. */
        namespace data {

            /** Namespace web. */
            namespace web {

                /** Properties of a Host. */
                interface IHost {

                    /** Host hostname */
                    hostname?: (string|null);

                    /** Host topLevelDomain */
                    topLevelDomain?: (string|null);

                    /** Host port */
                    port?: (number|null);

                    /** Host fetched */
                    fetched?: (string[]|null);

                    /** Host fetchFailed */
                    fetchFailed?: (boolean|null);

                    /** Host addresses */
                    addresses?: (string[]|null);

                    /** Host resolved */
                    resolved?: (string[]|null);
                }

                /** Represents a Host. */
                class Host implements IHost {

                    /**
                     * Constructs a new Host.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ch.resrc.data.web.IHost);

                    /** Host hostname. */
                    public hostname: string;

                    /** Host topLevelDomain. */
                    public topLevelDomain: string;

                    /** Host port. */
                    public port: number;

                    /** Host fetched. */
                    public fetched: string[];

                    /** Host fetchFailed. */
                    public fetchFailed: boolean;

                    /** Host addresses. */
                    public addresses: string[];

                    /** Host resolved. */
                    public resolved: string[];

                    /**
                     * Creates a new Host instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Host instance
                     */
                    public static create(properties?: ch.resrc.data.web.IHost): ch.resrc.data.web.Host;

                    /**
                     * Encodes the specified Host message. Does not implicitly {@link ch.resrc.data.web.Host.verify|verify} messages.
                     * @param message Host message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ch.resrc.data.web.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Host message, length delimited. Does not implicitly {@link ch.resrc.data.web.Host.verify|verify} messages.
                     * @param message Host message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ch.resrc.data.web.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Host message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Host
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ch.resrc.data.web.Host;

                    /**
                     * Decodes a Host message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Host
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ch.resrc.data.web.Host;

                    /**
                     * Verifies a Host message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Host message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Host
                     */
                    public static fromObject(object: { [k: string]: any }): ch.resrc.data.web.Host;

                    /**
                     * Creates a plain object from a Host message. Also converts values to other types if specified.
                     * @param message Host
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ch.resrc.data.web.Host, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Host to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Path. */
                interface IPath {

                    /** Path pathname */
                    pathname?: (string|null);

                    /** Path search */
                    search?: (string|null);

                    /** Path hash */
                    hash?: (string|null);
                }

                /** Represents a Path. */
                class Path implements IPath {

                    /**
                     * Constructs a new Path.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ch.resrc.data.web.IPath);

                    /** Path pathname. */
                    public pathname: string;

                    /** Path search. */
                    public search: string;

                    /** Path hash. */
                    public hash: string;

                    /**
                     * Creates a new Path instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Path instance
                     */
                    public static create(properties?: ch.resrc.data.web.IPath): ch.resrc.data.web.Path;

                    /**
                     * Encodes the specified Path message. Does not implicitly {@link ch.resrc.data.web.Path.verify|verify} messages.
                     * @param message Path message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ch.resrc.data.web.IPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Path message, length delimited. Does not implicitly {@link ch.resrc.data.web.Path.verify|verify} messages.
                     * @param message Path message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ch.resrc.data.web.IPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Path message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ch.resrc.data.web.Path;

                    /**
                     * Decodes a Path message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ch.resrc.data.web.Path;

                    /**
                     * Verifies a Path message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Path message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Path
                     */
                    public static fromObject(object: { [k: string]: any }): ch.resrc.data.web.Path;

                    /**
                     * Creates a plain object from a Path message. Also converts values to other types if specified.
                     * @param message Path
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ch.resrc.data.web.Path, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Path to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Auth. */
                interface IAuth {

                    /** Auth username */
                    username?: (string|null);

                    /** Auth password */
                    password?: (string|null);
                }

                /** Represents an Auth. */
                class Auth implements IAuth {

                    /**
                     * Constructs a new Auth.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ch.resrc.data.web.IAuth);

                    /** Auth username. */
                    public username: string;

                    /** Auth password. */
                    public password: string;

                    /**
                     * Creates a new Auth instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Auth instance
                     */
                    public static create(properties?: ch.resrc.data.web.IAuth): ch.resrc.data.web.Auth;

                    /**
                     * Encodes the specified Auth message. Does not implicitly {@link ch.resrc.data.web.Auth.verify|verify} messages.
                     * @param message Auth message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ch.resrc.data.web.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Auth message, length delimited. Does not implicitly {@link ch.resrc.data.web.Auth.verify|verify} messages.
                     * @param message Auth message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ch.resrc.data.web.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Auth message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Auth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ch.resrc.data.web.Auth;

                    /**
                     * Decodes an Auth message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Auth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ch.resrc.data.web.Auth;

                    /**
                     * Verifies an Auth message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Auth message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Auth
                     */
                    public static fromObject(object: { [k: string]: any }): ch.resrc.data.web.Auth;

                    /**
                     * Creates a plain object from an Auth message. Also converts values to other types if specified.
                     * @param message Auth
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ch.resrc.data.web.Auth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Auth to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Script. */
                interface IScript {

                    /** Script script */
                    script?: (string|null);
                }

                /** Represents a Script. */
                class Script implements IScript {

                    /**
                     * Constructs a new Script.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ch.resrc.data.web.IScript);

                    /** Script script. */
                    public script: string;

                    /**
                     * Creates a new Script instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Script instance
                     */
                    public static create(properties?: ch.resrc.data.web.IScript): ch.resrc.data.web.Script;

                    /**
                     * Encodes the specified Script message. Does not implicitly {@link ch.resrc.data.web.Script.verify|verify} messages.
                     * @param message Script message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ch.resrc.data.web.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Script message, length delimited. Does not implicitly {@link ch.resrc.data.web.Script.verify|verify} messages.
                     * @param message Script message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ch.resrc.data.web.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Script message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Script
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ch.resrc.data.web.Script;

                    /**
                     * Decodes a Script message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Script
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ch.resrc.data.web.Script;

                    /**
                     * Verifies a Script message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Script message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Script
                     */
                    public static fromObject(object: { [k: string]: any }): ch.resrc.data.web.Script;

                    /**
                     * Creates a plain object from a Script message. Also converts values to other types if specified.
                     * @param message Script
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ch.resrc.data.web.Script, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Script to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchResult. */
                interface IFetchResult {

                    /** FetchResult fetchedHost */
                    fetchedHost?: (string|null);

                    /** FetchResult hostnames */
                    hostnames?: (string[]|null);

                    /** FetchResult paths */
                    paths?: (ch.resrc.data.web.IPath[]|null);

                    /** FetchResult scripts */
                    scripts?: (ch.resrc.data.web.IScript[]|null);

                    /** FetchResult error */
                    error?: (boolean|null);
                }

                /** Represents a FetchResult. */
                class FetchResult implements IFetchResult {

                    /**
                     * Constructs a new FetchResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ch.resrc.data.web.IFetchResult);

                    /** FetchResult fetchedHost. */
                    public fetchedHost: string;

                    /** FetchResult hostnames. */
                    public hostnames: string[];

                    /** FetchResult paths. */
                    public paths: ch.resrc.data.web.IPath[];

                    /** FetchResult scripts. */
                    public scripts: ch.resrc.data.web.IScript[];

                    /** FetchResult error. */
                    public error: boolean;

                    /**
                     * Creates a new FetchResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchResult instance
                     */
                    public static create(properties?: ch.resrc.data.web.IFetchResult): ch.resrc.data.web.FetchResult;

                    /**
                     * Encodes the specified FetchResult message. Does not implicitly {@link ch.resrc.data.web.FetchResult.verify|verify} messages.
                     * @param message FetchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ch.resrc.data.web.IFetchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchResult message, length delimited. Does not implicitly {@link ch.resrc.data.web.FetchResult.verify|verify} messages.
                     * @param message FetchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ch.resrc.data.web.IFetchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ch.resrc.data.web.FetchResult;

                    /**
                     * Decodes a FetchResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ch.resrc.data.web.FetchResult;

                    /**
                     * Verifies a FetchResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchResult
                     */
                    public static fromObject(object: { [k: string]: any }): ch.resrc.data.web.FetchResult;

                    /**
                     * Creates a plain object from a FetchResult message. Also converts values to other types if specified.
                     * @param message FetchResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ch.resrc.data.web.FetchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
