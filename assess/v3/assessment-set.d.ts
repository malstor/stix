import { StixEnum } from '../../unfetter/stix.enum';
/**
 * @description assessment set represents many object assessments,
 *  ie answers to many capabilities vs attack attackpatterns
 * assessments set can represent state of an assessed infrastructure. ex. AsIs, ToBe, IfImplemented...
 */
export declare class AssessmentSet {
    assessments: string[];
    created: string;
    created_by_ref: string;
    description: string;
    id?: string;
    is_baseline: boolean;
    modified: string;
    name: string;
    readonly type: StixEnum;
}
