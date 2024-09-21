import { createClient } from "@/lib/supabase/server"

async function fetchPredictions() {
  const supabase = createClient()
  const { data, error } = await supabase.from('predictions').select()
  if (error) {
    console.log(error)
    return []
  }
  return data
}

export default async function Admin() {
  const predictions = await fetchPredictions()

  async function createPrediction(formData) {
    'use server'
    const supabase = createClient()
    const { error } = await supabase.from('predictions')
      .insert({
        title: formData.get('title'),
        desc: formData.get('desc'),
        expire_at: formData.get('until')
      })

    if (error) {
      console.log(error)
      return {
        errors: `Failed to create new prediction: ${error}`
      }
    }
  }

  return (
    <div>
      <h1>OmniMarket</h1>
      <div>
        <h2>New prediction</h2>
        <form action={createPrediction}>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" className="block border" />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <input id="desc" name="desc" className="block border" />
          </div>
          <div>
            <label htmlFor="until">Until</label>
            <input id="until" name="until" type="date" className="block border" />
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div>
        <h2>All predictions</h2>
        {predictions.map((p) => (
          <a href={`/predictions/${p.predId}`} key={p.predId} className="inline-block border p-4">
            <p>{p.title}</p>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
