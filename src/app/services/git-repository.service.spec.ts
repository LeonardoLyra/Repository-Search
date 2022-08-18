import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { GitRepositoryService } from './git-repository.service';
import { HttpClient } from '@angular/common/http';

fdescribe('GitRepositoryService', () => {
  let service: GitRepositoryService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GitRepositoryService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve chamar um GET no endpoint correto', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.listarRepos('');
    expect(spy).toHaveBeenCalledWith('https://api.github.com/search/repositories?q=');
  });
});
