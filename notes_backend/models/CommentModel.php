<?php
$db_dir = dirname(__FILE__);

require_once $db_dir . '/dataBaseConection.php';

class CommentModel
{
    private $connection;

    private $comment_id;
    private $user_id;
    private $task_id;
    private $content;
    private $created_at;


    public function __CONSTRUCT(){
        try {
            $this->connection=DatabaseConnection::dbConnection();
        }catch (Exception $exception){
            die($exception->getMessage());
        }
    }

    /**
     * @return mixed
     */
    public function getCommentId()
    {
        return $this->comment_id;
    }

    /**
     * @param mixed $comment_id
     */
    public function setCommentId($comment_id)
    {
        $this->comment_id = $comment_id;
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

    public function createComment(){
        try {
            $query = "INSERT INTO comment(user_id, task_id, content, created_at) 
            values ('{$this->getUserId()}','{$this->getTaskId()}','{$this->getContent()}',
                    '{$this->getCreatedAt()}')";
            return $this->connection->query($query);
        }
        catch (Exception $exception) {
            $exception->getMessage();
        }
    }

    public function getComments($task_id){
        try {
            $query = "select cm.content, cm.created_at,cm.user_id, us.name, us.profile_img from comment cm 
                        inner join users us on cm.user_id=us.user_id
                        where cm.task_id = $task_id order by created_at DESC";
            return $this->connection->query($query);
        }
        catch (Exception $exception){
            $exception->getMessage();
        }
    }

}
