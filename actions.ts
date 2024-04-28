"use server"

export async function getTrainings() {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
        {
            allTrainings {
              title
              company
            }
          }
            
            `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
export async function getCourthouseWebsites() {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
        {
            allCourthouseWebsites {
              title
              link
            }
          }
          
            
            `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}

export async function getTeamMembers() {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
        {
          allTeamMembers {
            name
            teamMemberType
            email
            bio
            extension
            headshot {
              url
            }
          }
        }
          
            
            `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
