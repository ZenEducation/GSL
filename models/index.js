// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, Message, ChatGroup, AuthInfo, UserMale, TextEmployee, UserFemale, DelightEmployee, UserMisc, InternApplicant, JobApplicant, Intern, Employee, Admin, SuperAdmin, UserMaleTextEmployee, UserMaleDelightEmployee, UserFemaleTextEmployee, UserMiscTextEmployee, UserFemaleDelightEmployee, UserMiscDelightEmployee } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Message,
  ChatGroup,
  AuthInfo,
  UserMale,
  TextEmployee,
  UserFemale,
  DelightEmployee,
  UserMisc,
  InternApplicant,
  JobApplicant,
  Intern,
  Employee,
  Admin,
  SuperAdmin,
  UserMaleTextEmployee,
  UserMaleDelightEmployee,
  UserFemaleTextEmployee,
  UserMiscTextEmployee,
  UserFemaleDelightEmployee,
  UserMiscDelightEmployee
};