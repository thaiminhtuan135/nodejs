// @ts-ignore
import { createId } from '@paralleldrive/cuid2';
export function generateEntityId(idProperty: string, prefix?: string): string {
  if (idProperty) {
    return idProperty;
  }

  const id = createId();
  return `${prefix ? `${prefix}_` : ''}${id}`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function manualAutoIncrement(
  tableName?: string,
): Promise<number | null> {
  return null;
}
