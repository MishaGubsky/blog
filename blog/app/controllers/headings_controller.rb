class HeadingsController < ApplicationController
  before_action :set_heading, only: [:show, :edit, :update, :destroy]

  # GET /headings
  # GET /headings.json
  def index
    render json: @headings = Heading.all
  end

  # GET /headings/1
  # GET /headings/1.json
  def show
  end

  # GET /headings/new
  def new
    render json: @heading = Heading.new
  end

  # GET /headings/1/edit
  def edit
  end

  # POST /headings
  # POST /headings.json
  def create
    @heading = Heading.new(heading_params)

    if @heading.save
      render json: @heading, status: :created
    else
      render json: @heading.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /headings/1
  # PATCH/PUT /headings/1.json
  def update
    if @heading.update(post_params)
      head :no_content
    else
      render json: @heading.errors, status: :unprocessable_entity
    end
  end

  # DELETE /headings/1
  # DELETE /headings/1.json
  def destroy
    @heading.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_heading
      @heading = Heading.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def heading_params
      params.require(:heading).permit(:title)
    end
end
