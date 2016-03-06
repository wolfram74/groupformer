class CohortsController < ApplicationController
  def new
  end
  def create
    cohort_params = {instructor_email: params['instructorEmail']}
    boots = []
    params['boots'].values.each do |boot|
      vals = {email: boot[0],
        name: boot[1]} if boot.length > 1
      boots << vals if vals.present? and vals.values.all?{|val| val.present?}
    end
    projects = []
    params['projects'].values.each do |project|
      vals = {name: project[0],
        proposer: project[1],
        description: project[2]
        } if project.length > 1
      projects << vals if vals.present? and vals.values.count{|val| val.present?} >= 2
    end
    cohort = Cohort.create(cohort_params)
    boots.each do |boot|
      cohort.boots << Boot.create(boot)
    end
    projects.each do |project|
      proposer = cohort.boots.where({name: project[:proposer]})&.first
      project.delete(:proposer)
      proposer.projects << Project.create(project) if proposer
    end
    render json: {status: 200, text:'yeppers'}
  end
  def show
    @cohort = Cohort.find_by(slug: params[:id])
    p @cohort.name
    @preferences = @cohort.preference_matrix
    @boot_names = @cohort.boots.pluck(:name).sort
    @project_names = []
    @cohort.boots.each do |boot|
      @project_names += boot.projects.pluck(:name)
    end

  end
end

