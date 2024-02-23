import { Guid } from 'guid-typescript';

export function getDocName(useGuid: true, extension: string, prefix: string): string;
export function getDocName(index: number, extension: string, prefix: string): string;
export function getDocName(useGuidOrIndex: true | number, extension: string, prefix: string): string;
export function getDocName(useGuidOrIndex: true | number, extension: string, prefix: string): string {
    if (typeof useGuidOrIndex === 'number') {
        return`${prefix ?? ''}${useGuidOrIndex}.${extension ?? 'txt'}`;
    } else {
        return `${prefix ?? ''}${Guid.create().toString()}.${extension ?? 'txt'}`;
    }
}
