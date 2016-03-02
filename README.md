# groupformer
source code for project selection and group formation
at group-former.herokuapp.com

## usage
an instructor will make a cohort by filling out a set of boot-email pairs and a set of title-proposer-description triplets which will generate the voting sessions for boots. This can be done either with manual forms (or csv input: stretch)
/cohort/new
this will generate
  a collection of pages for boots to express their preferences by means of a form
  /boot/$boot_id
  a page to monitor the results of voting and optionally delete the cohort
  /cohort/$cohort_id
