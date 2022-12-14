/**
 * @file index.js
 * @author Mingyu Seong
 */

/**
 * Todo type definition
 * @typedef Todo
 * @type {object}
 * @property {number} id - todo.id
 * @property {string} content - todo.content
 * @property {boolean} isDone - todo.isDone
 * @property {string} category - todo.category
 * @property {string[]} tags - todo.tags
 */
const Todo = {
  id,
  content,
  isDone,
  category,
  tags,
};

/**
 * CREATE Todo
 * @function
 * @name createTodo
 * @param {number} id - Todo의 아이디.  자동으로 생성되고 증가
 * @param {string} [content=""] - Todo의 내용.  미입력시 공백 입력
 * @param {boolean} [isDone=false] - Todo의 완료여부.  미입력시 false
 * @param {string} [category=null] - Todo의 카테고리.  미입력시 null
 * @param {string[]} [tags=[]] - Todo의 태그들.  미입력시 []
 * @description Todo를 생성한다.
 */
const createTodo = (id, content, isDone, category, tags) => {};

/**
 * READ Todo
 * @function
 * @name readTodo
 * @param {number} id - Todo의 아이디.
 * @returns {object}
 * @description Todo의 아이디를 기반으로 특정 Todo를 조회
 */
const readTodo = (id) => {};

/**
 * READ All Todo
 * @function
 * @name readAllTodo
 * @returns {Array}
 * @description 모든 할 일을 조회
 */
const readAllTodo = () => {};

/**
 * UPDATE Todo
 * @function
 * @name updateTodo
 * @param {number} id - Todo의 아이디.
 * @param {string} [content=prev] - Todo의 내용.  미입력시 이전 값 그대로 사용
 * @param {boolean} [isDone=prev] - Todo의 완료여부.  미입력시 이전 값 그대로 사용
 * @param {string} [category=prev] - Todo의 카테고리. 미입력시 이전 값 그대로 사용
 * @param {string[]} [tags=prev] - Todo의 태그들.  미입력시 이전 값 그대로 사용
 * @description Todo의 아이디를 기반으로 아이디를 제외한 모든 속성을 수정
 */
const updateTodo = (id, content, isDone, category, tags) => {};

/**
 * DELETE Todo
 * @function
 * @name deleteTodo
 * @param {number} id - Todo의 아이디.
 * @param {string[]} tags - Todo의 태그들.
 * @description Todo의 아이디를 기반으로 특정 할일을 삭제하거나 특정 태그, 모든 태그를 삭제
 */
const deleteTodo = (id, tags) => {};

/**
 * DELETE All Todo
 * @function
 * @name deleteAllTodo
 * @description 모든 할 일을 삭제
 */
const deleteAllTodo = () => {};
