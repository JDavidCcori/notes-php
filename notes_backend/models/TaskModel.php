<?php
$db_dir = dirname(__FILE__);

require_once $db_dir . '/dataBaseConection.php';

class TaskModel
{

    private $connection;

    private $title;
    private $task_id;
    private $content;
    private $created_at;
    private $deadline;
    private $priority;
    private $user_id;
    private $likes;
    private $is_public;
    private $task_state;

    public function __CONSTRUCT(){
        try {
            $this->connection = DatabaseConnection::dbConnection();
        }catch (Exception $exception){
            die($exception->getMessage());
        }
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getTaskId()
    {
        return $this->task_id;
    }

    /**
     * @param mixed $task_id
     */
    public function setTaskId($task_id)
    {
        $this->task_id = $task_id;
    }

    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param mixed $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * @param mixed $created_at
     */
    public function setCreatedAt($created_at)
    {
        $this->created_at = $created_at;
    }

    /**
     * @return mixed
     */
    public function getDeadline()
    {
        return $this->deadline;
    }

    /**
     * @param mixed $deadline
     */
    public function setDeadline($deadline)
    {
        $this->deadline = $deadline;
    }

    /**
     * @return mixed
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * @param mixed $priority
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;
    }

    /**
     * @return mixed
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * @param mixed $user_id
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }

    /**
     * @return mixed
     */
    public function getLikes()
    {
        return $this->likes;
    }

    /**
     * @param mixed $likes
     */
    public function setLikes($likes)
    {
        $this->likes = $likes;
    }

    /**
     * @return mixed
     */
    public function getIsPublic()
    {
        return $this->is_public;
    }

    /**
     * @param mixed $is_public
     */
    public function setIsPublic($is_public)
    {
        $this->is_public = $is_public;
    }

    /**
     * @return mixed
     */
    public function getTaskState()
    {
        return $this->task_state;
    }

    /**
     * @param mixed $task_state
     */
    public function setTaskState($task_state)
    {
        $this->task_state = $task_state;
    }

    public function createTask(){
        try {
            $query = "INSERT INTO tasks(title, content, created_at, deadline, user_id, priority) 
            values ('{$this->getTitle()}','{$this->getContent()}','{$this->getCreatedAt()}',
                    '{$this->getDeadline()}','{$this->getUserId()}','{$this->getPriority()}')";
            return $this->connection->query($query);
        }
        catch (Exception $exception) {
            $exception->getMessage();
        }
    }

    public function getTaskByUser($user_id){
        try {
            $query = "select * from tasks where user_id = $user_id order by created_at DESC";
            $tasks = $this->connection->query($query);

            return $tasks;
        }
        catch (Exception $exception){
            $exception->getMessage();
        }
    }

    public function updateTask(){
        try {
            $query = "update tasks set title='{$this->getTitle()}',content='{$this->getContent()}',
            deadline='{$this->getDeadline()}',priority='{$this->getPriority()}' where task_id='{$this->getTaskId()}'";
           return $this->connection->query($query);

        }
        catch (Exception $exception){
            $exception->getMessage();
        }
    }

    public function hacerPublico(){
        try {
            $query = "update tasks set is_public='{$this->getIsPublic()}' where task_id='{$this->getTaskId()}'";
            return $this->connection->query($query);
        }
        catch (Exception $exception){
            $exception->getMessage();
        }
    }

    public function getPublicTask(){
        try {
            $query = "select * from tasks ta inner join users us on ta.user_id=us.user_id where is_public = true order by created_at DESC";
            return $this->connection->query($query);
        }
        catch (Exception $exception){
            $exception->getMessage();
        }
    }

    public function deleteTask(){
        try {
            $query = "delete from tasks where task_id='{$this->getTaskId()}'";
            return $this->connection->query($query);
        }
        catch (Exception $exception){
            $exception->getMessage();
        }
    }
}