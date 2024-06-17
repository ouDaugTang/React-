package com.aloha.todo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.todo.dto.Todo;
import com.aloha.todo.mapper.TodoMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TodoServiceImpl implements TodoService{
    @Autowired
    private TodoMapper todoMapper;
    @Override
    public List<Todo> list() throws Exception {
        // log.info("안녕하세요");

        return todoMapper.list();

    }
    @Override
    public Todo insert(Todo todo) throws Exception {
        todoMapper.insert(todo);
        int newTodoNo = todo.getNo();
        Todo newTodo = todoMapper.select(newTodoNo);
        log.info("todo : " + newTodo);
        return newTodo;
    }
    @Override
    public Todo select(int no) throws Exception {
        return todoMapper.select(no);
    }
    @Override
    public int update(Todo todo) throws Exception {
        return todoMapper.update(todo);
        }
        
    @Override
    public int delete(int no) throws Exception {
        return todoMapper.delete(no);
    }
    @Override
    public int deleteAll() throws Exception {
        return todoMapper.deleteAll();
    }
    @Override
    public int clearAll() throws Exception {
        return todoMapper.clearAll();
    }
    
    
}