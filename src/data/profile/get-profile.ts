import type { Profile } from "@/domain/types";

import { profileData } from "./profile.data";

/**
 * Punto de acceso único al perfil.
 * En el futuro puede leer de CMS, MDX o API sin cambiar la capa de presentación.
 */
export function getProfile(): Profile {
  return profileData;
}
