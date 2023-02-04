import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAuthInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthInfo = LazyLoading extends LazyLoadingDisabled ? EagerAuthInfo : LazyAuthInfo

export declare const AuthInfo: (new (init: ModelInit<AuthInfo>) => AuthInfo) & {
  copyOf(source: AuthInfo, mutator: (draft: MutableModel<AuthInfo>) => MutableModel<AuthInfo> | void): AuthInfo;
}