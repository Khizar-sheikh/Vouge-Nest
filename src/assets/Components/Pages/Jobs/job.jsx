import Header from "./../../header/Header";
import JobContent from "./JobContent";
import Layout from './../../layout/Layout';

function Job() {
  return (
    <div>
<Layout>
<Header title="Jobs" />
      <JobContent />
</Layout>
    </div>
  );
}

export default Job;
