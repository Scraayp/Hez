import { PermissionFlags } from "discord.js";
import { GuildSettings } from "./global.types.js";

export type Guild = {
    id: string;
    name: string;
    icon: string;
    owner: string;

    permissions: Array<PermissionFlags>;

    botAdministrators: Array<string>;

    settings: GuildSettings;
}