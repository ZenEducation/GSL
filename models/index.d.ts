import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog: AsyncItem<Blog | undefined>;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly chatgroupID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly chatgroupID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatGroup = LazyLoading extends LazyLoadingDisabled ? EagerChatGroup : LazyChatGroup

export declare const ChatGroup: (new (init: ModelInit<ChatGroup>) => ChatGroup) & {
  copyOf(source: ChatGroup, mutator: (draft: MutableModel<ChatGroup>) => MutableModel<ChatGroup> | void): ChatGroup;
}

type EagerAuthInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthInfo, 'id'>;
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phoneNum?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuthInfo, 'id'>;
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phoneNum?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuthInfo = LazyLoading extends LazyLoadingDisabled ? EagerAuthInfo : LazyAuthInfo

export declare const AuthInfo: (new (init: ModelInit<AuthInfo>) => AuthInfo) & {
  copyOf(source: AuthInfo, mutator: (draft: MutableModel<AuthInfo>) => MutableModel<AuthInfo> | void): AuthInfo;
}

type EagerUserMale = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMale, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMaleTextEmployee?: (UserMaleTextEmployee | null)[] | null;
  readonly userMaleDelightEmployee?: (UserMaleDelightEmployee | null)[] | null;
}

type LazyUserMale = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMale, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMaleTextEmployee: AsyncCollection<UserMaleTextEmployee>;
  readonly userMaleDelightEmployee: AsyncCollection<UserMaleDelightEmployee>;
}

export declare type UserMale = LazyLoading extends LazyLoadingDisabled ? EagerUserMale : LazyUserMale

export declare const UserMale: (new (init: ModelInit<UserMale>) => UserMale) & {
  copyOf(source: UserMale, mutator: (draft: MutableModel<UserMale>) => MutableModel<UserMale> | void): UserMale;
}

type EagerUserFemale = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFemale, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFemaleTextEmployee?: (UserFemaleTextEmployee | null)[] | null;
  readonly userFemaleDelightEmployee?: (UserFemaleDelightEmployee | null)[] | null;
}

type LazyUserFemale = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFemale, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFemaleTextEmployee: AsyncCollection<UserFemaleTextEmployee>;
  readonly userFemaleDelightEmployee: AsyncCollection<UserFemaleDelightEmployee>;
}

export declare type UserFemale = LazyLoading extends LazyLoadingDisabled ? EagerUserFemale : LazyUserFemale

export declare const UserFemale: (new (init: ModelInit<UserFemale>) => UserFemale) & {
  copyOf(source: UserFemale, mutator: (draft: MutableModel<UserFemale>) => MutableModel<UserFemale> | void): UserFemale;
}

type EagerUserMisc = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMisc, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMiscTextEmployee?: (UserMiscTextEmployee | null)[] | null;
  readonly userMiscDelightEmployee?: (UserMiscDelightEmployee | null)[] | null;
}

type LazyUserMisc = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMisc, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMiscTextEmployee: AsyncCollection<UserMiscTextEmployee>;
  readonly userMiscDelightEmployee: AsyncCollection<UserMiscDelightEmployee>;
}

export declare type UserMisc = LazyLoading extends LazyLoadingDisabled ? EagerUserMisc : LazyUserMisc

export declare const UserMisc: (new (init: ModelInit<UserMisc>) => UserMisc) & {
  copyOf(source: UserMisc, mutator: (draft: MutableModel<UserMisc>) => MutableModel<UserMisc> | void): UserMisc;
}

type EagerTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TextEmployee, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMaleTextEmployee?: (UserMaleTextEmployee | null)[] | null;
  readonly userFemaleTextEmployee?: (UserFemaleTextEmployee | null)[] | null;
  readonly userMiscTextEmployee?: (UserMiscTextEmployee | null)[] | null;
}

type LazyTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TextEmployee, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMaleTextEmployee: AsyncCollection<UserMaleTextEmployee>;
  readonly userFemaleTextEmployee: AsyncCollection<UserFemaleTextEmployee>;
  readonly userMiscTextEmployee: AsyncCollection<UserMiscTextEmployee>;
}

export declare type TextEmployee = LazyLoading extends LazyLoadingDisabled ? EagerTextEmployee : LazyTextEmployee

export declare const TextEmployee: (new (init: ModelInit<TextEmployee>) => TextEmployee) & {
  copyOf(source: TextEmployee, mutator: (draft: MutableModel<TextEmployee>) => MutableModel<TextEmployee> | void): TextEmployee;
}

type EagerDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DelightEmployee, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMaleDelightEmployee?: (UserMaleDelightEmployee | null)[] | null;
  readonly userFemaleDelightEmployee?: (UserFemaleDelightEmployee | null)[] | null;
  readonly userMiscDelightEmployee?: (UserMiscDelightEmployee | null)[] | null;
}

type LazyDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DelightEmployee, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMaleDelightEmployee: AsyncCollection<UserMaleDelightEmployee>;
  readonly userFemaleDelightEmployee: AsyncCollection<UserFemaleDelightEmployee>;
  readonly userMiscDelightEmployee: AsyncCollection<UserMiscDelightEmployee>;
}

export declare type DelightEmployee = LazyLoading extends LazyLoadingDisabled ? EagerDelightEmployee : LazyDelightEmployee

export declare const DelightEmployee: (new (init: ModelInit<DelightEmployee>) => DelightEmployee) & {
  copyOf(source: DelightEmployee, mutator: (draft: MutableModel<DelightEmployee>) => MutableModel<DelightEmployee> | void): DelightEmployee;
}

type EagerInternApplicant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InternApplicant, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInternApplicant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InternApplicant, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InternApplicant = LazyLoading extends LazyLoadingDisabled ? EagerInternApplicant : LazyInternApplicant

export declare const InternApplicant: (new (init: ModelInit<InternApplicant>) => InternApplicant) & {
  copyOf(source: InternApplicant, mutator: (draft: MutableModel<InternApplicant>) => MutableModel<InternApplicant> | void): InternApplicant;
}

type EagerJobApplicant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobApplicant, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobApplicant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobApplicant, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobApplicant = LazyLoading extends LazyLoadingDisabled ? EagerJobApplicant : LazyJobApplicant

export declare const JobApplicant: (new (init: ModelInit<JobApplicant>) => JobApplicant) & {
  copyOf(source: JobApplicant, mutator: (draft: MutableModel<JobApplicant>) => MutableModel<JobApplicant> | void): JobApplicant;
}

type EagerIntern = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Intern, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIntern = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Intern, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Intern = LazyLoading extends LazyLoadingDisabled ? EagerIntern : LazyIntern

export declare const Intern: (new (init: ModelInit<Intern>) => Intern) & {
  copyOf(source: Intern, mutator: (draft: MutableModel<Intern>) => MutableModel<Intern> | void): Intern;
}

type EagerEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employee, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employee, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

type EagerAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}

type EagerSuperAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SuperAdmin, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySuperAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SuperAdmin, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly email: string;
  readonly altEmails?: string | null;
  readonly phoneNum?: string | null;
  readonly altPhoneNums?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SuperAdmin = LazyLoading extends LazyLoadingDisabled ? EagerSuperAdmin : LazySuperAdmin

export declare const SuperAdmin: (new (init: ModelInit<SuperAdmin>) => SuperAdmin) & {
  copyOf(source: SuperAdmin, mutator: (draft: MutableModel<SuperAdmin>) => MutableModel<SuperAdmin> | void): SuperAdmin;
}

type EagerUserMaleTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMaleTextEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMaleId?: string | null;
  readonly textEmployeeId?: string | null;
  readonly userMale: UserMale;
  readonly textEmployee: TextEmployee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMaleTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMaleTextEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMaleId?: string | null;
  readonly textEmployeeId?: string | null;
  readonly userMale: AsyncItem<UserMale>;
  readonly textEmployee: AsyncItem<TextEmployee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMaleTextEmployee = LazyLoading extends LazyLoadingDisabled ? EagerUserMaleTextEmployee : LazyUserMaleTextEmployee

export declare const UserMaleTextEmployee: (new (init: ModelInit<UserMaleTextEmployee>) => UserMaleTextEmployee) & {
  copyOf(source: UserMaleTextEmployee, mutator: (draft: MutableModel<UserMaleTextEmployee>) => MutableModel<UserMaleTextEmployee> | void): UserMaleTextEmployee;
}

type EagerUserMaleDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMaleDelightEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMaleId?: string | null;
  readonly delightEmployeeId?: string | null;
  readonly userMale: UserMale;
  readonly delightEmployee: DelightEmployee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMaleDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMaleDelightEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMaleId?: string | null;
  readonly delightEmployeeId?: string | null;
  readonly userMale: AsyncItem<UserMale>;
  readonly delightEmployee: AsyncItem<DelightEmployee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMaleDelightEmployee = LazyLoading extends LazyLoadingDisabled ? EagerUserMaleDelightEmployee : LazyUserMaleDelightEmployee

export declare const UserMaleDelightEmployee: (new (init: ModelInit<UserMaleDelightEmployee>) => UserMaleDelightEmployee) & {
  copyOf(source: UserMaleDelightEmployee, mutator: (draft: MutableModel<UserMaleDelightEmployee>) => MutableModel<UserMaleDelightEmployee> | void): UserMaleDelightEmployee;
}

type EagerUserFemaleTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFemaleTextEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userFemaleId?: string | null;
  readonly textEmployeeId?: string | null;
  readonly userFemale: UserFemale;
  readonly textEmployee: TextEmployee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFemaleTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFemaleTextEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userFemaleId?: string | null;
  readonly textEmployeeId?: string | null;
  readonly userFemale: AsyncItem<UserFemale>;
  readonly textEmployee: AsyncItem<TextEmployee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFemaleTextEmployee = LazyLoading extends LazyLoadingDisabled ? EagerUserFemaleTextEmployee : LazyUserFemaleTextEmployee

export declare const UserFemaleTextEmployee: (new (init: ModelInit<UserFemaleTextEmployee>) => UserFemaleTextEmployee) & {
  copyOf(source: UserFemaleTextEmployee, mutator: (draft: MutableModel<UserFemaleTextEmployee>) => MutableModel<UserFemaleTextEmployee> | void): UserFemaleTextEmployee;
}

type EagerUserFemaleDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFemaleDelightEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userFemaleId?: string | null;
  readonly delightEmployeeId?: string | null;
  readonly userFemale: UserFemale;
  readonly delightEmployee: DelightEmployee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFemaleDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFemaleDelightEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userFemaleId?: string | null;
  readonly delightEmployeeId?: string | null;
  readonly userFemale: AsyncItem<UserFemale>;
  readonly delightEmployee: AsyncItem<DelightEmployee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFemaleDelightEmployee = LazyLoading extends LazyLoadingDisabled ? EagerUserFemaleDelightEmployee : LazyUserFemaleDelightEmployee

export declare const UserFemaleDelightEmployee: (new (init: ModelInit<UserFemaleDelightEmployee>) => UserFemaleDelightEmployee) & {
  copyOf(source: UserFemaleDelightEmployee, mutator: (draft: MutableModel<UserFemaleDelightEmployee>) => MutableModel<UserFemaleDelightEmployee> | void): UserFemaleDelightEmployee;
}

type EagerUserMiscTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMiscTextEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMiscId?: string | null;
  readonly textEmployeeId?: string | null;
  readonly userMisc: UserMisc;
  readonly textEmployee: TextEmployee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMiscTextEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMiscTextEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMiscId?: string | null;
  readonly textEmployeeId?: string | null;
  readonly userMisc: AsyncItem<UserMisc>;
  readonly textEmployee: AsyncItem<TextEmployee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMiscTextEmployee = LazyLoading extends LazyLoadingDisabled ? EagerUserMiscTextEmployee : LazyUserMiscTextEmployee

export declare const UserMiscTextEmployee: (new (init: ModelInit<UserMiscTextEmployee>) => UserMiscTextEmployee) & {
  copyOf(source: UserMiscTextEmployee, mutator: (draft: MutableModel<UserMiscTextEmployee>) => MutableModel<UserMiscTextEmployee> | void): UserMiscTextEmployee;
}

type EagerUserMiscDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMiscDelightEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMiscId?: string | null;
  readonly delightEmployeeId?: string | null;
  readonly userMisc: UserMisc;
  readonly delightEmployee: DelightEmployee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMiscDelightEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMiscDelightEmployee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userMiscId?: string | null;
  readonly delightEmployeeId?: string | null;
  readonly userMisc: AsyncItem<UserMisc>;
  readonly delightEmployee: AsyncItem<DelightEmployee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMiscDelightEmployee = LazyLoading extends LazyLoadingDisabled ? EagerUserMiscDelightEmployee : LazyUserMiscDelightEmployee

export declare const UserMiscDelightEmployee: (new (init: ModelInit<UserMiscDelightEmployee>) => UserMiscDelightEmployee) & {
  copyOf(source: UserMiscDelightEmployee, mutator: (draft: MutableModel<UserMiscDelightEmployee>) => MutableModel<UserMiscDelightEmployee> | void): UserMiscDelightEmployee;
}