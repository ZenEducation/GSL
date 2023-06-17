// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, Message, ChatGroup, AuthInfo, UserMale, UserFemale, UserMisc, TextEmployee, DelightEmployee, InternApplicant, JobApplicant, Intern, Employee, Admin, SuperAdmin, UserMaleTextEmployee, UserMaleDelightEmployee, UserFemaleTextEmployee, UserFemaleDelightEmployee, UserMiscTextEmployee, UserMiscDelightEmployee } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Message,
  ChatGroup,
  AuthInfo,
  UserMale,
  UserFemale,
  UserMisc,
  TextEmployee,
  DelightEmployee,
  InternApplicant,
  JobApplicant,
  Intern,
  Employee,
  Admin,
  SuperAdmin,
  UserMaleTextEmployee,
  UserMaleDelightEmployee,
  UserFemaleTextEmployee,
  UserFemaleDelightEmployee,
  UserMiscTextEmployee,
  UserMiscDelightEmployee
};