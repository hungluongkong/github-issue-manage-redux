import React from 'react';
import Action from '../constants/actions';
/* eslint-disable no-unused-vars */

/* ------------------ Button ------------------ */

export enum ButtonType {
  Default,
  Primary,
}

export enum ButtonSize {
  Small,
  Normal,
}

export enum InputType {
  Input,
  TextArea,
}

export interface ButtonProps {
  type?: ButtonType,
  size?: ButtonSize,
  value: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

/* ---------------- Button end ---------------- */

/* ------------------- Input ------------------ */

export interface InputProps {
  defaultValue?: string,
  placeholder?: string,
  textRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
  isRequire?: boolean,
  onChange?: (value: string) => void,
}

/* ----------------- Input end ---------------- */

/* ---------------- Input Group --------------- */
export interface InputGroupProps {
  label?: string,
  defaultValue: string,
  placeholder?: string,
  textRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
  inputType?: InputType,
  isRequire?: boolean,
}

/* -------------- Input Group end ------------- */

/* ------------------- Form ------------------- */

export interface IssueFormProps {
  issue?: Issue,
  onSubmit: (issue: Issue) => void,
}

/* ----------------- Form end ----------------- */

/* ------------------- Popup ------------------ */

export enum TaskReportType {
  Success,
  Warning,
}

export interface TaskReportProps {
  content: string,
  date: Date,
  timeoutMS?: number,
  type?: TaskReportType,
}

/* ----------------- Popup end ---------------- */

/* ------------------- Issue ------------------ */

/**
 * Interface of Issue:
 * To submit, add milestone = null, labels = [], assignees = []
 * More: https://developer.github.com/v3/issues/#create-an-issue
 */
export interface Issue {
  id: number,
  number: number,
  url: string,
  title: string,
  body: string,
  locked: boolean,
  createdAt: Date,
  updatedAt: Date,
}

export interface IssueProps {
  issue: Issue,
  onToggleContent: (issue: Issue) => void,
  onToggleLock: (issue: Issue) => void,
}

export interface IssueListProps {
  issues: Issue[],
  loading?: boolean,
  getIssues: () => void,

  task?: string,
  isShowForm: boolean,
  lastTaskTime: Date,
  toggleForm: (issue?: Issue) => void,
  toggleIssue: (issue: Issue) => void,
  toggleLockIssue: (issue: Issue) => void,
}

/* -------- Issue content display group ------- */

export interface IssueContentProps {
  issue: Issue,
  onEditPressed: () => void;
}

/* -------------------- End ------------------- */

/* ------------ Reducers & actions ------------ */

export interface IssueState {
  issues: Issue[],
  pending: boolean,
  error: string,
  task: string,
  lastTaskTime: Date,
}

export interface ActionPayload {
  type: Action,
  issues?: Issue[],
  issue?: Issue,
  error?: string,
  msg?: string,
}

export interface AsideState {
  isShowForm: boolean,
  isShowIssue: boolean,
  issue: Issue,
  error: string,
}

export interface AsideActionPayload {
  type: Action,
  issue?: Issue,
  error?: string,
}

export interface RootReducerState {
  issues: IssueState,
  asideView: AsideState,
}
/* -------------------- End ------------------- */

/* ---------------- Aside View ---------------- */

export interface AsideViewProps {
  isShowIssue: boolean,
  isShowForm: boolean,
  issue: Issue,
  updateIssue: (issue: Issue) => void,
  toggleIssue: (issue: Issue) => void,
  toggleForm: (issue: Issue) => void,
}
