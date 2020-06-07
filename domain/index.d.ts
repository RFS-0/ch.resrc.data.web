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

                    /** Host port */
                    port?: (number|null);

                    /** Host fetched */
                    fetched?: (string[]|null);

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

                    /** Host port. */
                    public port: number;

                    /** Host fetched. */
                    public fetched: string[];

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

                    /** Path path */
                    path?: (string|null);

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

                    /** Path path. */
                    public path: string;

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

                /** Properties of a Protocol. */
                interface IProtocol {

                    /** Protocol protocol */
                    protocol?: (string|null);
                }

                /** Represents a Protocol. */
                class Protocol implements IProtocol {

                    /**
                     * Constructs a new Protocol.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ch.resrc.data.web.IProtocol);

                    /** Protocol protocol. */
                    public protocol: string;

                    /**
                     * Creates a new Protocol instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Protocol instance
                     */
                    public static create(properties?: ch.resrc.data.web.IProtocol): ch.resrc.data.web.Protocol;

                    /**
                     * Encodes the specified Protocol message. Does not implicitly {@link ch.resrc.data.web.Protocol.verify|verify} messages.
                     * @param message Protocol message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ch.resrc.data.web.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Protocol message, length delimited. Does not implicitly {@link ch.resrc.data.web.Protocol.verify|verify} messages.
                     * @param message Protocol message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ch.resrc.data.web.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Protocol message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Protocol
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ch.resrc.data.web.Protocol;

                    /**
                     * Decodes a Protocol message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Protocol
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ch.resrc.data.web.Protocol;

                    /**
                     * Verifies a Protocol message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Protocol
                     */
                    public static fromObject(object: { [k: string]: any }): ch.resrc.data.web.Protocol;

                    /**
                     * Creates a plain object from a Protocol message. Also converts values to other types if specified.
                     * @param message Protocol
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ch.resrc.data.web.Protocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Protocol to JSON.
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
