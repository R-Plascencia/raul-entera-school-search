class CollegeAPI {
  static async searchSchools(searchText) {
    const baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools"
    const queryParams = `school.name=${searchText}&fields=id,school.name,school.city,school.zip,school.state,school.school_url,location`
    const apiKey = "api_key=OVnHSWjcqTFBVsRPNpjkFn8vRdBbXrUFKKwCRIh8"
    const apiUrl = baseUrl + "?" + queryParams + "&" + apiKey;

    const res = await fetch(apiUrl);
    const data = await res.json()

    return data;
  }
}

export default CollegeAPI;
