import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the office',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At home',
      url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the museum',
      url: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the office',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At home',
      url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the museum',
      url: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the office',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At home',
      url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the museum',
      url: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the office',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At home',
      url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the museum',
      url: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the office',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At home',
      url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
    }, 
    {
      title: 'At the museum',
      url: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    }
  ]


  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index)<5
  }
}
