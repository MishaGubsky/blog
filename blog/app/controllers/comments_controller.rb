class CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
    @post = Post.find(params[:post_id])
    render json: @post.comments
  end

  # GET /comments/new
  def new
    render json: @comment = Comment.new
  end

  # POST /comments
  # POST /comments.json
  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.new(comment_params)

    if @comment.save
      @post.comments << @comment
      render json: @comment, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    head :no_content
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
